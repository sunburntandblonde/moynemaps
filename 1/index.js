
//import { MarkerClusterer } from "@googlemaps/markerclusterer";



// [START maps_marker_clustering]
async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
      center: { lat: -38.1980, lng: 142.3935 },
    mapId: "3dbdbce5a7b5f922",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
  


  // Add some markers to the map.
  const markers = locations.map((position, i) => {
   
//icon for markers
const icon = document.createElement("img");
icon.src =  position.markericon;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
		content: icon,
title: position.id,
		
		
    });
	  


    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent("<div style='float:left'><img src='"
      + position.thumb+"'></div><div style='float:right; padding: 10px;'><h3>"
      + position.id
      +"</h3><a href='"
      + position.www+"'>Website</a></div>");
      
      infoWindow.open(map, marker);
		
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new markerClusterer.MarkerClusterer({ markers, map,  });
}

const locations = [

{ lat: -38.38628, lng: 142.59039, id: "Allansford and District Primary School", thumb: "images/2.png", markericon:"Primary.png", www: "https://www.allansford-ps.vic.edu.au" },
 { lat:-38.38662, lng: 142.22822, id: "Port Fairy Consolidated School", thumb: "images/1.png", markericon:"Primary.png", www: "https://www.pfc.vic.edu.au" },
  { lat:-38.34794, lng: 142.65084, id: "Cudgee Primary School", thumb: "images/3.png", markericon:"Primary.png", www: "https://www.cudgeeps.vic.edu.au" },
  { lat:-38.36634, lng: 142.4668, id: "Warrnambool West Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.29244, lng: 142.3687, id: "Koroit And District Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.31681, lng: 142.4845, id: "Woodford Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.18741, lng: 142.43176, id: "Woolsthorpe Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.32935, lng: 142.73253, id: "Panmure Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.03088, lng: 142.00147, id: "Macarthur Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.46676, lng: 142.73443, id: "Nullawarre and District Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.37728, lng: 142.48257, id: "Warrnambool Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.37802, lng: 142.45615, id: "Merrivale Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.38959, lng: 142.49958, id: "Warrnambool East Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.35498, lng: 142.48177, id: "Merri River School", thumb: "images1.jpeg", markericon:"Special.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.08637, lng: 142.80955, id: "Mortlake P-12 College", thumb: "images1.jpeg", markericon:"PriSec.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.28599, lng: 142.52288, id: "Grasmere Primary School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.10698, lng: 142.31917, id: "Hawkesdale P12 College", thumb: "images1.jpeg", markericon:"PriSec.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.35871, lng: 142.45892, id: "Brauer Secondary College", thumb: "images1.jpeg", markericon:"Secondary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.37672, lng: 142.49968, id: "Warrnambool College", thumb: "images1.jpeg", markericon:"Secondary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.37099, lng: 142.47736, id: "Emmanuel College Warrnambool", thumb: "images1.jpeg", markericon:"Secondary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.29989, lng: 142.36897, id: "St Patrick's School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.37249, lng: 142.48614, id: "St Joseph's School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.38613, lng: 142.23167, id: "St Patrick's School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.3515, lng: 142.44614, id: "St John's School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.07994, lng: 142.80202, id: "St Colman's School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.36492, lng: 142.46583, id: "St Pius X School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.38525, lng: 142.51953, id: "Our Lady Help of Christians School", thumb: "images1.jpeg", markericon:"Primary.png", www: "https:www.pfc.vic.edu.au" },
  { lat:-38.36211, lng: 142.50617, id: "King's College", thumb: "images1.jpeg", markericon:"PriSec.png", www: "https:www.pfc.vic.edu.au" },


];

initMap();
// [END maps_marker_clustering]
