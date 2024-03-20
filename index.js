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
        <div class="price">${property.price}</div>
        <div class="address"><a href="${property.address}">Find out more</a></div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-people-group fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-school fa-lg school" title="school"></i>
            <span class="fa-sr-only">school</span>
            <span>${property.school}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-dollar-sign fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size}</span>
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
    price: "Port Fairy",
    type: "tree-city",
    bed: 3741,
    school: 2,
    size: "1,277,000",
    position: {
      lat: -38.38662,
      lng: 142.22822,
    },
  },
  {
    address: "https://www.moyne.vic.gov.au/Make-it-Moyne/Koroit",
    description: "Charming town surrounded by rolling green pastures",
    price: "Koroit",
    type: "tree-city",
    bed: 2184,
    school: 2,
    size: "640,000",
    position: {
      lat: -38.29344340105825,
      lng: 142.36724192797078,
    },
  },
  {
    address: "100 Chris St, Portola Valley, CA",
    description: "Spacious child great for small business",
    price: "$ 3,125,000",
    type: "child",
    bed: 4,
    school: 4,
    size: 800,
    position: {
      lat: 37.39561833718522,
      lng: -122.21855116258479,
    },
  },
  {
    address: "98 Aleh Ave, Palo Alto, CA",
    description: "A lovely store on busy road",
    price: "$ 4,225,000",
    type: "tree-city",
    bed: 2,
    school: 1,
    size: 210,
    position: {
      lat: 37.423928529779644,
      lng: -122.1087629822001,
    },
  },
  {
    address: "2117 Su St, MountainView, CA",
    description: "Single family house near golf club",
    price: "$ 1,700,000",
    type: "home",
    bed: 4,
    school: 3,
    size: 200,
    position: {
      lat: 37.40578635332598,
      lng: -122.15043378466069,
    },
  },
  {
    address: "197 Alicia Dr, Santa Clara, CA",
    description: "Multifloor large child",
    price: "$ 5,000,000",
    type: "child",
    bed: 5,
    school: 4,
    size: 700,
    position: {
      lat: 37.36399747905774,
      lng: -122.10465384268522,
    },
  },
  {
    address: "700 Jose Ave, Sunnyvale, CA",
    description: "3 storey townhouse with 2 car garage",
    price: "$ 3,850,000",
    type: "school",
    bed: 4,
    school: 4,
    size: 600,
    position: {
      lat: 37.38343706184458,
      lng: -122.02340436985183,
    },
  },
  {
    address: "868 Will Ct, Cupertino, CA",
    description: "Single family house in great school zone",
    price: "$ 2,500,000",
    type: "home",
    bed: 3,
    school: 2,
    size: 100,
    position: {
      lat: 37.34576403052,
      lng: -122.04455090047453,
    },
  },
  {
    address: "655 Haylee St, Santa Clara, CA",
    description: "2 storey store with large storage room",
    price: "$ 2,500,000",
    type: "store-alt",
    bed: 3,
    school: 2,
    size: 450,
    position: {
      lat: 37.362863347890716,
      lng: -121.97802139023555,
    },
  },
  {
    address: "2019 Natasha Dr, San Jose, CA",
    description: "Single family house",
    price: "$ 2,325,000",
    type: "home",
    bed: 4,
    school: 3.5,
    size: 500,
    position: {
      lat: 37.41391636421949,
      lng: -121.94592071575907,
    },
  },
];

initMap();