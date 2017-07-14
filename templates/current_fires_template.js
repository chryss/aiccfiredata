// Template to generate current_fires.js via a server-side Python script 

$(document).ready(function(){
	var firemap = [];
	var fire;
	
	// Fire data is written into this script server-side and appended to an array of fire objects called firemap
	%(firelist)s
	
	// we would like circles for the larger fires, and markers for all
	var fireCircle;
	var fireMarker;
	function getIcon(acreage) {
	    if (acreage < 10) { return 'images/mm_20_blue.png'; }
	    else if (acreage < 250) { return 'images/ltblue-dot.png'; }
	    else if (acreage < 2500) { return 'images/yellow-dot.png'; }
	    else { return 'images/red-dot.png'; }
	}
	// function called to initialize the drawing of the fire data overlay on the Google map
	function initialize() {
		var centerAlaskaLatLng = new google.maps.LatLng(64.5, -151);
		var myOptions = {
			zoom: 6,
			center: centerAlaskaLatLng,
			mapTypeId: google.maps.MapTypeId.TERRAIN,
			scaleControl: true
		};
		var map = new google.maps.Map(document.getElementById("map_canvas"),
		    myOptions);
		for (var fire=0; fire<firemap.length; fire++) {
		// For large fires.construct the circle for each value in fire.
			if (firemap[fire].acreage >= 250) {
				var fireOptions = {
					strokeColor: "#FF0000",
					strokeOpacity: 0.8,
					strokeWeight: 2,
					fillColor: "#FF0000",
					fillOpacity: 0.35,
					map: map,
					center: firemap[fire].center,
					radius: Math.sqrt(firemap[fire].acreage*4046.85642/Math.PI)
				};
				fireCircle = new google.maps.Circle(fireOptions);
			}
			var contentString = '<div id="content">' +
			    '<div id="siteNotice">' +
			    '</div>' +
			    '<h4 id="firstHeading" class="firstHeading">'+
				firemap[fire].designation +
				' fire</h4>' +
			    '<div id="bodyContent"><p>Discovered: ' +
				firemap[fire].discovered +
				'<br/>Last updated: ' +
				firemap[fire].lastupdated +
				'<br/>' +
				firemap[fire].acreage +
				' acres</p><p>' +
				firemap[fire].maintext +
			    '</p></div>'+
			    '</div>';
			var infowindow = new google.maps.InfoWindow({
				maxWidth: 300
			});
			fireMarker = new google.maps.Marker({
			    position: firemap[fire].center,
			    map: map,
			    title: firemap[fire].designation,
				html: contentString,
				icon: getIcon(firemap[fire].acreage)
			});
			google.maps.event.addListener(fireMarker, 'click', function() {
				infowindow.setContent(this.html);
				infowindow.open(map,this);
			});
		}
	};
	// calling initialize when the document's DOM is ready
	initialize();

    // some more bits of text on the page that are being filled in client-side
	var lastupdatedtext = "Last updated: %(date)s.";
	$("span#jslastupdated").text(lastupdatedtext);
	var numfirestext = ", which is currently tracking " + firemap.length + " fires in Alaska (active, smoldering or in the process of being demobilized)";
	$("#jsnumfires").text(numfirestext);
});
