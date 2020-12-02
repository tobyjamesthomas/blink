let blinkButton = document.getElementById('blinkButton');

blinkButton.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: 'blink.js'
    });
  });
};
