var markers;
var marker;
var gmarkers = [];
var map;
var markerCluster;
var studNumber = 0;

function initMap() {
	var infowindow = new google.maps.InfoWindow({});
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		zoom: 9,
		maxZoom: 15,
		minZoom: 1,
		center: new google.maps.LatLng(-38.1980, 142.3935), // Ukraine
		streetViewControl: false,
		mapTypeControl: false,
		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		mapId: "3dbdbce5a7b5f922",
		
	}
	
	var name_points = new google.maps.Data({map: map});
var name_boundary = new google.maps.Data({map: map});
	
		 // Load the towns GeoJSON onto the map.
  
  
 name_boundary.setStyle((feature) => {
	return {
	fillColor: "grey",
           fillOpacity:0.2,
           strokeColor:"black",
            strokeOpacity: 0.1,
            strokeWeight: 2,
           zIndex:11
}

	
  });
	
	map = new google.maps.Map(mapCanvas, mapOptions, SetBounds);
	///Single marker custom icon
	var customIcon = {
		url: 'good.png',
		scaledSize: new google.maps.Size(30, 30), // scaled size
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 0) // anchor
	}
	map.data.loadGeoJson('towns.geojson', null, function(features) {
		var markers = features.map(function(feature, i) {
			var marker = new google.maps.Marker({
				position: feature.getGeometry().get(0),
				//icon: customIcon,
				
				animation: google.maps.Animation.DROP
			});
			
		  
			//Adding infowindow listener to the marker
			marker.addListener('click', function() {
				var content = feature.getProperty('Town_name') + '<br>';
				content += '<b>' + 'Description: ' + feature.getProperty('Description') + '</b><br>';
				content += '<span style="font-style: italic;">Population: ' + feature.getProperty('Population') + '</span><br>';
				content += '<span style="font-style: italic;">Schools: ' + feature.getProperty('Schools') + '</span><br>';
				content += '<span style="font-style: italic;">Average property price ' + feature.getProperty('PropPrice') + 'Health Services: ' + feature.getProperty('HealthSer') + ' Child care ' + feature.getProperty('ChildCare') + '</span><br>';
				infowindow.setContent(content);
				infowindow.open(map, marker);
			});
			return marker;
		});
		///Marker Clustering
		markerCluster = new MarkerClusterer(map, markers, {
			imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
		});
	});
	map.data.setMap(null);
} //initMap function ends

// Function to filter markers by combined categories



function closeInfoWindow() {
	infowindow.close();
}

function SetBounds() {
	// try to adjust the view point of the map to include all markers
	var bounds = new google.maps.LatLngBounds();

	map.data.forEach(function(feature) {
		var point = feature.getGeometry().get();
		bounds.extend(point);
		return false;
	});

	map.setCenter(bounds.getCenter());
	map.fitBounds(bounds);
	map.setZoom(map.getZoom() + 1);
}

google.maps.event.addDomListener(window, 'load', initMap);