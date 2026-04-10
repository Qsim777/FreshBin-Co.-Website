// FreshBin Co. — Google Apps Script
// Deploy as a Web App: Execute as Me, Anyone can access
// Paste this file at: https://script.google.com → New Project

const SPREADSHEET_ID = '1-zDwdGYyZul7H_jk_pKo3Yoo2KVDtCXVitlLu7EHnDo';
const SHEET_NAME     = 'Website Bookings';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss    = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Name', 'Phone', 'Suburb', 'Address',
        'Bins', 'Services', 'Plan',
        'Preferred Day', 'Preferred Time', 'Collection Day',
        'Notes', 'Status'
      ]);
      // Style header row
      const headerRange = sheet.getRange(1, 1, 1, 13);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#091422');
      headerRange.setFontColor('#00c896');
    }

    const row = [
      data.timestamp || new Date().toISOString(),
      data.name          || '',
      data.phone         || '',
      data.suburb        || '',
      data.address       || '',
      data.bins          || '',
      data.services      || '',
      data.plan          || '',
      data.preferredDay  || '',
      data.preferredTime || '',
      data.collectionDay || '',
      data.notes         || '',
      'New'
    ];

    sheet.appendRow(row);

    // Colour the Status cell teal for new bookings
    const lastRow     = sheet.getLastRow();
    const statusCell  = sheet.getRange(lastRow, 13);
    statusCell.setBackground('#00c896');
    statusCell.setFontColor('#091422');
    statusCell.setFontWeight('bold');

    // Email notification to Qasim
    sendNotificationEmail(data);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendNotificationEmail(data) {
  const owner = Session.getActiveUser().getEmail();

  const body = `
New booking received via freshbinsco.com.au!

──────────────────────────────
CUSTOMER DETAILS
──────────────────────────────
Name:     ${data.name}
Phone:    ${data.phone}
Suburb:   ${data.suburb}
Address:  ${data.address}

──────────────────────────────
SERVICE DETAILS
──────────────────────────────
Bins:     ${data.bins}
Services: ${data.services}
Plan:     ${data.plan}

──────────────────────────────
SCHEDULING
──────────────────────────────
Preferred Day:  ${data.preferredDay}
Preferred Time: ${data.preferredTime}
Collection Day: ${data.collectionDay}

──────────────────────────────
NOTES
──────────────────────────────
${data.notes || '(none)'}

──────────────────────────────
Reply via WhatsApp: https://wa.me/61${data.phone.replace(/^0/, '').replace(/\s/g, '')}
View all bookings: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}
  `.trim();

  GmailApp.sendEmail(
    owner,
    '🪣 New FreshBin Booking — ' + data.name + ' (' + data.suburb + ')',
    body
  );
}

// Required for GET requests (health check / browser test)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', service: 'FreshBin Co. Booking API' }))
    .setMimeType(ContentService.MimeType.JSON);
}
