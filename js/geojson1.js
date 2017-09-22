document.getElementById("myform2").style.display='none';
function submitForm1() {
        var val = $(this).find('#in').val();
		var val2 = $(this).find('#in2').val();
		var cord = val2.split(",");
		var lat = cord[0];
		var lon = cord[1];
		var lonlat = lon+','+lat;
		
        $('ul.list').append('<li>{ "type": "Feature", "properties": { "Name": "' +
		val +'", "Description": "" }, "geometry": { "type": "Point", "coordinates":['+ lonlat + ',0.0 ] } }</li>');
       		
		e.preventDefault();
    })});
function submitForm2() {
	
        var val = $(this).find('#in3').val();
		var val2 = $(this).find('#in4').val();
		
        $('ul.list').append('<li>{ "type": "Feature", "properties": { "Name": "' +
		val +'", "Description": "" }, "geometry": { "type": "Point", "coordinates":['+ val2 + ',0.0 ] } }</li>');
       e.preventDefault();
    });
	document.getElementById("in3").value="";
	        document.getElementById("in4").value="";
});

document.getElementById("dwn-btn").addEventListener("click", function(){
    // Generate download of hello.txt file with some content
	var optionTexts = [];
$("ul li").each(function() { optionTexts.push($(this).text()) ;});
    var filename = "trails.geojson";
	var geo_begin ='{"type": "FeatureCollection","features": [';
	var geo_end = ']}';
	
	var geojson_file = geo_begin + optionTexts +geo_end;
	download(filename, geojson_file);
},false);

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
 
 function latlonFunction() {
    document.getElementById("myform2").style.display='none';
	document.getElementById("myform").style.display='block';
};

function lonlatFunction() {
    document.getElementById("myform").style.display='none';
	document.getElementById("myform2").style.display='block';
};

