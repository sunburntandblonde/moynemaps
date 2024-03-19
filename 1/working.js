
import { MarkerClusterer } from "@googlemaps/markerclusterer";



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
icon.src =  position.tim;

    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
		content: icon,
title: position.id,
		
		
    });
	  


    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent("<div style='float:left'><img src='"+ position.thumb+"'></div><div style='float:right; padding: 10px;'><h3>"+ position.id+"</h3><br/>Lights displayed from 7pm to 11pm<br/></div>");
      infoWindow.open(map, marker);
		
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map,  });
}

const locations = [

{ lat: -38.28652353, lng:  142.3592278620752, id: "42 Nine Mile Creek Road, Koroit", thumb: "images/1.jpeg", tim: "school.png" }, 
{ lat: -38.28919728, lng:  142.36576289187974, id: "6 Gladman Court, Koroit", thumb: "images/2.jpeg", tim: "santa.png" }, 
//{ lat: -38.28787065, lng:  142.35889807260583, id: "33 Black Street, Koroit", thumb: "images/3.jpeg"}, 
//{ lat: -38.28962789, lng:  142.36628369317256, id: "1 Gladman Court, Koroit", thumb: "images/4.jpeg"}, 
//{ lat: -38.03395796, lng:  141.99718370041074, id: "1 Eversley Street, Macarthur", thumb: "images/5.jpeg"}, 
//{ lat: -38.37893082, lng:  142.23077885526467, id: "17 Tieman Street, Port Fairy", thumb: "images/6.jpeg"}, 
//{ lat: -38.3357532, lng:  142.72815717189613, id: "8840 Princes Highway, Panmure", thumb: "images/7.jpeg"}, 
//{ lat: -38.08277643, lng:  142.80725584672638, id: "23 Officer Street, Mortlake", thumb: "images/8.jpeg"}, 
//{ lat: -38.30537149, lng:  142.36614517305665, id: "316 Lake View Road, Koroit", thumb: "images/9.jpeg"}, 
//{ lat: -38.38411801, lng:  142.22522803117252, id: "35 Baden Powell Drive, Port Fairy", thumb: "images/10.jpeg"}, 
//{ lat: -38.25695606, lng:  142.52744942815895, id: "481 Cathcarts Ford Road, Grassmere", thumb: "images/11.jpeg"}, 
//{ lat: -38.3778629, lng:  142.2283988016811, id: "7 Perry Close, Port Fairy", thumb: "images/12.jpeg"}, 
//{ lat: -38.29139625, lng:  142.47277822841434, id: "829 Warrnambool-Caramut Road, Mailors Flat", thumb: "images/13.jpeg"}, 
//{ lat: -38.33964507, lng:  142.65326712965478, id: "164 Dwarroon Road, Cudgee", thumb: "images/14.jpeg"}, 
//{ lat: -38.39031608, lng:  142.22087343024438, id: "47 Philip Street, Port Fairy", thumb: "images/15.jpeg"}, 
//{ lat: -38.28900269, lng:  142.36225325852445, id: "36 Keane Street, Koroit", thumb: "images/16.jpeg"}, 
//{ lat: -38.38424519, lng:  142.23663037209545, id: "1/54 Sackville Street, Port Fairy", thumb: "images/17.jpeg"}, 
//{ lat: -38.33912205, lng:  142.65335906562672, id: "170 Dwarroon Road, Cudgee", thumb: "images/18.jpeg"}, 
//{ lat: -38.36655278, lng:  142.23829768770867, id: "30 Sandspit Road, Port Fairy", thumb: "images/19.jpeg"}, 
//{ lat: -38.3730789, lng:  142.2308196769219, id: "135 Princes Highway, Port Fairy", thumb: "images/20.jpeg"}, 
//{ lat: -38.30240132, lng:  142.3715051013806, id: "16 Anne Street, Koroit", thumb: "images/21.jpeg"}, 
//{ lat: -38.2414397, lng:  142.69792698528437, id: "10 Queen Street, Framlingham", thumb: "images/22.jpeg"}, 
//{ lat: -38.08775309, lng:  142.35094471870045, id: "266 Minjah Road, Hawkesdale", thumb: "images/23.jpeg"}, 
//{ lat: -38.3756716, lng:  142.23232957280433, id: "15 McGill Court, Port Fairy", thumb: "images/24.jpeg"}, 


];

initMap();
// [END maps_marker_clustering]
