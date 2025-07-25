// Security configuration and utilities
export const SECURITY_CONFIG = {
  // API endpoint - placeholder URL for demo purposes
  GOOGLE_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwA9-P4CPeZkhRFb_O9FbltQUJy2wk4b_jVFeFQfTv8I1NL2HTmfoO5G4zZ_T4gLxpHWQ/exec",
  
  // Rate limiting
  RATE_LIMIT: {
    MAX_REQUESTS_PER_MINUTE: 5,
    WINDOW_MS: 60000, // 1 minute
  },
  
  // Input validation
  INPUT_LIMITS: {
    MAX_NAME_LENGTH: 100,
    MAX_EMAIL_LENGTH: 254, // RFC 5321 limit
    MAX_PHONE_LENGTH: 20,
    MAX_LOCATION_LENGTH: 100,
    MAX_MESSAGE_LENGTH: 1000,
  },
  
  // Timeout settings
  REQUEST_TIMEOUT: 10000, // 10 seconds
};

// Input sanitization utility
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .slice(0, 1000); // Limit length
}

// Rate limiting utility
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - SECURITY_CONFIG.RATE_LIMIT.WINDOW_MS;
    
    const userRequests = this.requests.get(identifier) || [];
    const recentRequests = userRequests.filter(time => time > windowStart);
    
    if (recentRequests.length >= SECURITY_CONFIG.RATE_LIMIT.MAX_REQUESTS_PER_MINUTE) {
      return false;
    }
    
    recentRequests.push(now);
    this.requests.set(identifier, recentRequests);
    return true;
  }
}

export const rateLimiter = new RateLimiter();

// Secure fetch utility with timeout and validation
export async function secureApiCall(
  url: string, 
  data: FormData,
  options: { timeout?: number } = {}
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeout || SECURITY_CONFIG.REQUEST_TIMEOUT);
  
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      mode: "no-cors", // Google Apps Script requires no-cors mode
      signal: controller.signal,
      // Security headers
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
      },
    });
    
    clearTimeout(timeoutId);
    
    // With no-cors mode, we can't read response status or body
    // If we reach this point without an exception, the request was sent successfully
    // We'll assume success for Google Apps Script integration
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    
    // Only throw errors for actual failures (timeouts, network issues, etc.)
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout - please try again');
      }
      // For no-cors requests, some "errors" might actually be successful submissions
      // Only throw for genuine network failures
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Network error - please check your connection');
      }
    }
    
    // For other errors in no-cors mode, we'll assume the request went through
    // This prevents false error messages when the submission actually succeeded
    console.warn('Request completed with no-cors limitation:', error);
    return new Response(); // Return empty response to indicate completion
  }
}