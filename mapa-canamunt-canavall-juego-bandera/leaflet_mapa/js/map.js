let map = L.map('map').setView([39.5712, 2.6512], 16);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

// elimina el zoom con la rueda.
map.scrollWheelZoom.disable();

// icono de peligro
var enzonaenemiga = L.ExtraMarkers.icon({
  icon: 'fa-exclamation',
  markerColor: 'red',
  shape: 'circle',
  prefix: 'fas'
});

// jugadores canamunt
let canamunt1 = L.marker([39.5751, 2.6506])
  .bindPopup('<h2>Paco</h2><lu><li>Balas: 12</li><li style="color: red">Sangre: 80%</li></lu>')
  .setIcon(enzonaenemiga)
  .addTo(map);


let canamunt2 = L.marker([39.5680, 2.6522])
  .bindPopup('<h2>Luis</h2><lu><li>Balas: 7</li><li style="color: red">Sangre: 100%</li></lu>')
  .addTo(map);

let canamunt3 = L.marker([39.5690, 2.6478])
  .bindPopup('<h2>Maria</h2><lu><li>Balas: 8</li><li style="color: red">Sangre: 50%</li></lu>')
  .addTo(map);


// jugadores canavall
let canavall1 = L.marker([39.57439, 2.64714])
  .bindPopup('<h2>Enrique</h2><lu><li>Balas: 12</li><li style="color: red">Sangre: 80%</li></lu>')
  .addTo(map);

let canavall2 = L.marker([39.57329, 2.64724])
  .bindPopup('<h2>Mateo</h2><lu><li>Balas: 7</li><li style="color: red">Sangre: 100%</li></lu>')
  .addTo(map);

let canavall3 = L.marker([39.57439, 2.65008])
  .bindPopup('<h2>Carmen</h2><lu><li>Balas: 8</li><li style="color: red">Sangre: 50%</li></lu>')
  .addTo(map);
 

// bandera canavall
var bandera_canamunt = L.ExtraMarkers.icon({
  icon: 'fa-flag',
  markerColor: 'orange',
  shape: 'circle',
  prefix: 'fa'
});

// bandera canamunt
var bandera_canavall = L.ExtraMarkers.icon({
  icon: 'fa-flag',
  markerColor: 'violet',
  shape: 'circle',
  prefix: 'fa'
});

L.marker()
  .setLatLng([39.57449, 2.64774]) // jardines de la misericordia.
  .setIcon(bandera_canamunt)
  .bindPopup('Bandera de Canavall')
  .addTo(map);

L.marker()
  .setLatLng([39.56744, 2.65578]) // el temple.
  .setIcon(bandera_canavall)
  .bindPopup('Bandera de Canamunt')
  .addTo(map);



let avenidas_coordenadas = [

  [39.5764, 2.6531], // porta des camp
  [39.5646, 2.6565], // general riera

]
  
let avenidas = L.polyline(avenidas_coordenadas, {
  color: 'black'
})
  .addTo(map);

let canamunt = L.polygon([
  [39.5714, 2.6469],
  [39.5714, 2.6564],
  [39.5672, 2.6564],
  [39.5672, 2.6469],
  
])
  //.bindPopup('<h1>Zona Canamunt</h1>')
  .addTo(map);

// define un rectangulo
let canavall_coordenadas = [[39.5755, 2.6441], [39.5715, 2.6540]];

let canavall = L.rectangle(canavall_coordenadas, { color: "#ff7800", weight: 1 })
  //.bindPopup('<h1>Zona Canavall</h1>')
  .addTo(map);

// zona de recuperacion de sangre
let zona_neutra = L.circle([39.57238, 2.65527], {
  color: 'black',
  fillColor: 'green',
  fillOpacity: 0.2,
  radius: 100
})
  .bindTooltip('<h2>Zona segura</h2> Aqui podras recuperar tu sangre')
  .addTo(map);

// agrupacion de elementos
let fg = L.featureGroup([zona_neutra, canamunt, canavall, avenidas]).addTo(map);


  //centra el zoom en las coordenadas del poligono.
map.fitBounds(fg.getBounds());