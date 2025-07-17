# Google Sheets Integration Setup for Oruku Polama Waitlist

## Overview

The Oruku Polama waitlist forms (Guest and Host forms) are configured to submit data securely to Google Sheets. The application uses environment variables and built-in security features including input sanitization, rate limiting, and secure API calls.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Oruku Polama Waitlist"
4. Set up the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `User Type` (will be "guest" or "host")
   - C1: `Name`
   - D1: `Email`
   - E1: `Phone`
   - F1: `Location`
   - G1: `Message`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Delete the default code and paste the following script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSheet();
    
    // Get form data
    var timestamp = e.parameter.timestamp || new Date().toISOString();
    var userType = e.parameter.userType || '';
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var location = e.parameter.location || '';
    var message = e.parameter.message || '';
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      userType,
      name,
      email,
      phone,
      location,
      message
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return doPost(e);
}
```

## Step 3: Deploy the Script

1. Click the `Deploy` button (top right)
2. Click `New deployment`
3. Choose type: `Web app`
4. Set the following:
   - Description: "Oruku Polama Waitlist Form Handler"
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Click `Deploy`
6. **Copy the Web app URL** - you'll need this for the next step

## Step 4: Configure the Google Script URL

The application now uses environment variables for configuration. You have two options:

### Option A: Local Development (Recommended for testing)
1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add the following line:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
3. Replace `YOUR_SCRIPT_ID` with the actual script ID from step 3

### Option B: Production Deployment
1. In your hosting platform (Vercel, Netlify, etc.), add an environment variable:
   - Variable name: `VITE_GOOGLE_SCRIPT_URL`
   - Variable value: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`

### Option C: Fallback Configuration
If you prefer not to use environment variables, you can directly update the URL in:
1. Open `src/config/security.ts`
2. Find this line (around line 4):
   ```typescript
   GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
   ```
3. Replace `YOUR_SCRIPT_ID` with your actual script ID

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script logs: `Executions` tab in Apps Script

## Security Features

The Oruku Polama waitlist forms include several built-in security features:

### Built-in Security Features
- **Input Sanitization**: All user inputs are automatically sanitized to prevent XSS attacks
- **Rate Limiting**: Users are limited to 5 submissions per minute to prevent spam
- **Form Validation**: Comprehensive validation using Zod schemas with proper regex patterns
- **Secure API Calls**: 10-second timeout and proper error handling
- **CORS Protection**: Uses `no-cors` mode for secure cross-origin requests

### Data Flow
1. User fills out either Guest or Host form
2. Data is validated and sanitized on the frontend
3. Rate limiting checks prevent abuse
4. Secure API call submits data to Google Sheets
5. User receives confirmation toast message

## Important Notes

- **Two Form Types**: The app has separate Guest and Host forms, both submit to the same Google Sheet with a "userType" field
- **No Direct Response Reading**: The form uses `no-cors` mode for security, so success is assumed if no error occurs
- **Automatic Timestamps**: Each submission includes an ISO timestamp
- **Data should appear in your Google Sheet within a few seconds**
- **Make sure your Google Sheet is accessible** (not restricted to specific users)

## Additional Security Considerations

- The Google Apps Script is set to "Anyone" access for functionality
- Input validation happens both on frontend (React/Zod) and can be added to the Google Apps Script
- Rate limiting prevents spam but monitor your sheet for unusual activity
- Consider adding additional validation in your Google Apps Script for production use

## Troubleshooting

1. **Data not appearing**: Check the Apps Script execution logs
2. **CORS errors**: This is normal with no-cors mode - check the Google Sheet directly
3. **Permission errors**: Make sure the Apps Script has permission to access your sheet
4. **Script errors**: Check the Apps Script editor for syntax errors

Your waitlist form should now save directly to Google Sheets!