// Environment configuration
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

export const ENV = {
  isDevelopment,
  isProduction,
  
  // API Configuration - These can be set via environment variables
  api: {
    googleScriptUrl: import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
    timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || "10000"),
  },
  
  // Security Configuration
  security: {
    enableRateLimit: import.meta.env.VITE_ENABLE_RATE_LIMIT !== "false",
    maxRequestsPerMinute: parseInt(import.meta.env.VITE_MAX_REQUESTS_PER_MINUTE || "5"),
    enableInputSanitization: import.meta.env.VITE_ENABLE_INPUT_SANITIZATION !== "false",
  },
  
  // Logging Configuration
  logging: {
    enableConsoleLog: isDevelopment || import.meta.env.VITE_ENABLE_CONSOLE_LOG === "true",
    enableErrorReporting: import.meta.env.VITE_ENABLE_ERROR_REPORTING === "true",
  },
} as const;

// Type-safe environment variable access
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = import.meta.env[key];
  if (value === undefined && defaultValue === undefined) {
    console.warn(`Environment variable ${key} is not defined and no default value provided`);
  }
  return value || defaultValue || '';
}

// Validate required environment variables
export function validateEnvironment(): void {
  const requiredVars = [
    // Add any required environment variables here
  ];
  
  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    // In a real app, you might want to throw an error here
  }
}

// Initialize environment validation
if (ENV.isDevelopment) {
  validateEnvironment();
}