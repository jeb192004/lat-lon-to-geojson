// Copy to clipboard example
document.querySelector("#visible-button").onclick = function() {
  // Select the content
  var orvTH = document.querySelector("#visible-input").value;
 var orvTHLatLon = orvTH.split(',', 2);
 var orvTHLat = orvTHLatLon[0];
  var orvTHLon = orvTHLatLon[1];
	var orvthMapdata = orvTHLon +", " + orvTHLat;
	document.querySelector("#new-cord").value = orvthMapdata;
	document.querySelector("#new-cord").select();
	alert(orvthMapdata);
  // Copy to the clipboard
  document.execCommand('copy');
};
