let map = L.map("map-container").setView([22.27583223, 114.154832714], 13);
L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png", {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery by Wikimedia Foundation ',
  maxZoom: 18,
  setView: true
}).addTo(map);

let handleResize = () => {
  console.log("something happened");
  console.log(map.getCenter());
};

// Handle resize events!
map.on("zoomend", handleResize);
map.on("dragend", handleResize);
map.on("resize", handleResize);

// In loop
// L.marker([51.5, -0.09]).addTo(map)
// In loop 2, add information
//   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//   .openPopup();
