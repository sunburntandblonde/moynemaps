async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: -38.1980, lng: 142.3935 };
  const map = new Map(document.getElementById("map"), {
    zoom: 10,
    center,
    mapId: "3dbdbce5a7b5f922",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
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

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="name">${property.name}</div>
        <div class="address"><a href="${property.address}">Find out more about ${property.name}</a></div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-people-group fa-lg pop" title="Population"></i>
            <span class="fa-sr-only">pop</span>
            <span>${property.pop}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-school fa-lg school" title="school"></i>
            <span class="fa-sr-only">school</span>
            <span>${property.school}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-dollar-sign fa-lg price" title="Average property price"></i>
            <span class="fa-sr-only">price</span>
            <span>${property.price}</span>
        </div>
        </div>
    </div>
    `;
  return content;
}

const properties = [
  {
    address: "https://www.moyne.vic.gov.au/Make-it-Moyne/Port-Fairy",
    description: "Heritage buildings and stunning beaches",
    name: "Port Fairy",
    type: "school",
    pop: 3741,
    school: 2,
    price: "1,277,000",
    position: {
      lat: -38.38662,
      lng: 142.22822,
    },
  },
  {
    address: "https://www.moyne.vic.gov.au/Make-it-Moyne/Koroit",
    description: "Charming town surrounded by rolling green pastures",
    name: "Koroit",
    type: "shop",
    pop: 422,
    school: 1,
    price: "640,000",
    position: {
      lat: -38.29344340105825,
      lng: 142.36724192797078,
    },
  },
  {
    address: "Small town beside the Spring Creek",
    description: "Spacious  great for small business",
    name: "Woolsthorpe",
    type: "child",
    pop: 422,
    school: 1,
    price: "400,00",
    position: {
      lat: -38.184710,
      lng: 142.431668,
    },
  },
  {
    address: "98 Aleh Ave, Palo Alto, CA",
    description: "A lovely store on busy road",
    name: "Macarthur",
    type: "city",
    pop: 2,
    school: 0,
    price: "210",
    position: {
      lat: -38.03691492667418, 
      lng: 142.00401453436143,
    },
  },
  
];

initMap();