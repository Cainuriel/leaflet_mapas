let map = L.map('map').setView([39.5752, 2.6512], 17);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);



let Jugador1 = L.marker([39.5751, 2.6506])
  .bindPopup('<img src="img/image.jpg" alt="imagen del zombie" style=" height:50px; width: 50px;">')
  .addTo(map);

let Jugador2 = L.marker([39.5752, 2.6552])
  .bindPopup('<h2 style="color:orange"> Necesita antidoto </h2> Jugador 2')
  .addTo(map);

  //  creacion del icono
let iconZombie = L.icon({
  iconUrl: 'img/image.jpg',
  iconSize: [36, 36],
  iconAnchor: [0, 36]
});

let Jugador3 = L.marker([39.5732, 2.6512])
  .bindPopup('<h2 style="color:red"> Infectado</h2> Jugador 3')
  .setIcon(iconZombie)
  .addTo(map);

// extramarkerts icono
var colordMarker = L.ExtraMarkers.icon({
  icon: 'fa-syringe',
  markerColor: 'orange',
  shape: 'circle',
  prefix: 'fa'
});

L.marker()
  .setLatLng([39.5752, 2.6562])
  .setIcon(colordMarker)
  .bindPopup('Antidoto')
  .addTo(map);

// cartel.
let zonainfectada = L.popup()
  .setLatLng([39.5712, 2.6512])
  .setContent('<h1>Zona infectada</h1> <h2>virus asintomatico</h2> Si pasas por aqui te infectaras sin tener sintomas pudiendo infectar otros jugadores')
  .openOn(map);