
async function initMap() {
	var infowindow = new google.maps.InfoWindow({});
	var AdvancedMarkerElement = await google.maps.importLibrary("marker");
	var mapCanvas = document.getElementById('map');
	
	var mapOptions = {
		zoom: 9,
		maxZoom: 15,
		minZoom: 1,
		center: new google.maps.LatLng(-38.1980, 142.3935), // Ukraine
		streetViewControl: false,
		mapTypeControl: false,
		mapId: "3dbdbce5a7b5f922",
			
	}
	
		map = new google.maps.Map(mapCanvas, mapOptions, SetBounds);
	///Single marker custom icon
		
	
	const customIcon = {
        path: "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z", //SVG path of font awesome marker
        fillColor: `#FF00FF`,
			//fillColor: `${feature.getProperty('HexCode')}`,
      	fillOpacity: 1,
		strokeWeight: 0,
        scale: 0.05, //size of the marker, careful! this scale also affects anchor and labelOrigin
        anchor: new google.maps.Point(200,510), //position of the icon, careful! this is affected by scale
        //labelOrigin: new google.maps.Point(190,190) //position of the label, careful! this is affected by scale
    }
	
		
map.data.loadGeoJson('mih.geojson', null, function(features) {
		var markers = features.map(function(feature, i) {
			var marker = new google.maps.Marker({
				position: feature.getGeometry().get(0),
				icon: customIcon, 
	animation: google.maps.Animation.DROP
			});
			
			
			//Adding infowindow listener to the marker
			marker.addListener('click', function() {
				
				//var category = event.feature.getProperty('category');
   		  function toggleHighlight(markerView) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}
    
				var content = document.createElement("div");
				content.classList.add("property_highlight");
					var name = feature.getProperty('Town_name');
    				var description = feature.getProperty('Description');
    				var type = feature.getProperty('HealthSer');
				var school = feature.getProperty('Schools');
				var ccare = feature.getProperty('ChildCare');
				var price = feature.getProperty('PropPrice');
    				var population = feature.getProperty('Population');
				const icolour = feature.getProperty('HexCode');
				 content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${type}" title="${type}"></i>
        <span class="fa-sr-only">${type}</span>
    </div>
    <div class="details">
        <div class="name">${name}</div>
        <div class="address">${description}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-people-group fa-lg pop" title="Population"></i>
            <span class="fa-sr-only">pop</span>
            <span>${population}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-school fa-lg school" title="Schools"></i>
            <span class="fa-sr-only">school</span>
            <span>${school}</span>
        </div>
<div>
            <i aria-hidden="true" class="fa fa-child-reaching fa-lg ccare" title="Childcare"></i>
            <span class="fa-sr-only">ccare</span>
            <span>${ccare}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-dollar-sign fa-lg price" title="Property price"></i>
            <span class="fa-sr-only">price</span>
            <span>${price}</span>
        </div>
        </div>
    </div>
    `
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
} 





function closeInfoWindow() {
	infowindow.close();
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
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

initMap();
//google.maps.event.addDomListener(window, 'load', initMap);