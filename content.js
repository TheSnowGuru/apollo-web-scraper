document.addEventListener('DOMContentLoaded', () => {
  const data = {}; // Your data extraction logic goes here
  // Send data back to the background script
  chrome.runtime.sendMessage({ action: "scrapedData", data: data });
});
