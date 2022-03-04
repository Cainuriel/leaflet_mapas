let map = L.map('map').setView([39.5712, 2.6512], 17);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

let circle = L.circle([39.5700, 2.6504], {
  color: 'red',
  fillColor: '#ff00ff',
  fillOpacity: 0.3,
  radius: 130
  
}).addTo(map);

circle.on({

  mouseover: function () {
    circle.setStyle(
      {
        fillColor: 'red'
      },
      document.getElementById('address').innerHTML = '<h1> ¡Enemigo cerca!</h1>'
    )
  },

  mouseout: function () {
    circle.setStyle(
      {
        fillColor: "#ff00ff",
      },
      (document.getElementById("address").innerHTML = "")
    );
  }
});

let capa = L.layerGroup().addTo(map);

map.on('click', function(e) {
  document.getElementById('lat').innerHTML = e.latlng.lat;
  document.getElementById('lng').innerHTML = e.latlng.lng;

  capa.clearLayers();

  L.marker(e.latlng).addTo(capa);

})