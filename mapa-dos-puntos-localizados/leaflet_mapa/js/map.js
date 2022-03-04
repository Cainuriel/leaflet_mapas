let map = L.map('map').setView([39.5752, 2.6512], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let Jugador1 = L.marker([39.5752, 2.6512])
  .bindPopup('Jugador 1')
  .addTo(map);

let Jugador2 = L.marker([39.5732, 2.6512])
  .bindPopup('<h2 style="color:red"> Infectado</h2> Jugador 2')
  .addTo(map);

let zonainfectada = L.popup()
  .setLatLng([39.5712, 2.6512])
  .setContent('<h1>Zona infectada</h1> <h2>virus asintomatico</h2> Si pasas por aqui te infectaras sin tener sintomas pudiendo infectar otros jugadores')
  .openOn(map);