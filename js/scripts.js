// Copy to clipboard example
document.querySelector("#visible-button").onclick = function() {
  // Select the content
  document.querySelector("#visible-input").select();
  // Copy to the clipboard
  document.execCommand('copy');
};
