/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
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
    mapId: "DEMO_MAP_ID",
  });
  const infoWindow = new google.maps.InfoWindow({
    content: "",
    disableAutoPan: true,
  });
 // Create a <script> tag and set geojson file as the source. 
   const script = document.createElement("script");
  script.src =
    "christmaslist.js";
  document.getElementsByTagName("head")[0].appendChild(script);

  // Add some markers to the map.
  const markers = locations.map((position, i) => {
   
//icon for markers
const santaImg = document.createElement("img");
santaImg.src =  "santa.png";



    const marker = new google.maps.marker.AdvancedMarkerElement({
      position,
     content: santaImg,

    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(position.lat + ", " + position.lng);
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer({ markers, map });
}

const locations = [
 { lat: -38.28652353, lng:  142.3592278620752},
{ lat: -38.28919728, lng:  142.36576289187974},
{ lat: -38.28787065, lng:  142.35889807260583},
{ lat: -38.28962789, lng:  142.36628369317256},
{ lat: -38.03395796, lng:  141.99718370041074},
{ lat: -38.37893082, lng:  142.23077885526467},
{ lat: -38.3357532, lng:  142.72815717189613},
{ lat: -38.28964707, lng:  142.3663134481111},
{ lat: -38.08277643, lng:  142.80725584672638},
{ lat: -38.30537149, lng:  142.36614517305665},
{ lat: -38.38411801, lng:  142.22522803117252},
{ lat: -38.25695606, lng:  142.52744942815895},
{ lat: -38.3778629, lng:  142.2283988016811},
{ lat: -38.29139625, lng:  142.47277822841434},
{ lat: -38.33964507, lng:  142.65326712965478},
{ lat: -38.39031608, lng:  142.22087343024438},
{ lat: -38.28900269, lng:  142.36225325852445},
{ lat: -38.38424519, lng:  142.23663037209545},
{ lat: -38.33912205, lng:  142.65335906562672},
{ lat: -38.36655278, lng:  142.23829768770867},
{ lat: -38.3730789, lng:  142.2308196769219},
{ lat: -38.30240132, lng:  142.3715051013806},
{ lat: -38.2414397, lng:  142.69792698528437},
{ lat: -38.08775309, lng:  142.35094471870045},
{ lat: -38.3756716, lng:  142.23232957280433},
{ lat: -38.28922353, lng:  142.36575457250413},
];

initMap();
// [END maps_marker_clustering]
