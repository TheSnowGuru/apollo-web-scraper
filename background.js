let scrapedData = []; // Array to hold scraped data

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scrapeData") {
        // Add the scraped data from content script to the array
        scrapedData.push(request.data);
        sendResponse({status: "Data added"});
    } else if (request.action === "exportCSV") {
        // Convert the aggregated data to CSV format
        const csvContent = convertArrayToCSV(scrapedData);
        // Create a Blob with CSV data
        const blob = new Blob([csvContent], {type: 'text/csv;charset=utf-8;'});
        // Generate a URL for the Blob
        const csvUrl = URL.createObjectURL(blob);
        // Send the URL back to the popup for the user to download
        sendResponse({csvUrl: csvUrl});
    }
});

function convertArrayToCSV(array) {
    // Convert your data array to CSV string here
    // Placeholder function: Implement CSV conversion based on your data structure
    let csvString = ""; // This should be replaced with actual CSV conversion logic
    return csvString;
}
