# Google Sheets Integration Setup for Oruku Polama Waitlist

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Oruku Polama Waitlist"
4. Set up the following column headers in row 1:
   - A1: `Timestamp`
   - B1: `User Type`
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

## Step 4: Update the React Component

1. Open `src/components/WaitlistForm.tsx`
2. Find this line:
   ```typescript
   const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
   ```
3. Replace `YOUR_SCRIPT_ID` with the actual URL you copied from step 3

## Step 5: Test the Integration

1. Submit a test form on your website
2. Check your Google Sheet to see if the data appears
3. If there are issues, check the Apps Script logs: `Executions` tab in Apps Script

## Important Notes

- The form uses `no-cors` mode, so we can't read the response directly
- Data should appear in your Google Sheet within a few seconds
- Make sure your Google Sheet is accessible (not restricted to specific users)
- The script will automatically handle new submissions and append them to the sheet

## Security Considerations

- The web app is set to "Anyone" access for simplicity
- For production, consider implementing basic validation in the Apps Script
- Monitor your sheet for spam submissions and implement rate limiting if needed

## Troubleshooting

1. **Data not appearing**: Check the Apps Script execution logs
2. **CORS errors**: This is normal with no-cors mode - check the Google Sheet directly
3. **Permission errors**: Make sure the Apps Script has permission to access your sheet
4. **Script errors**: Check the Apps Script editor for syntax errors

Your waitlist form should now save directly to Google Sheets!