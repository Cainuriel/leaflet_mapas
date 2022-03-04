

let marker = L.marker([0, 0], {
  draggable: 'true'
});

let map = L.map('map').setView([39.5712, 2.6512], 17);

L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

map.locate({setView: true, maxZoom: 16, watch: true})

/**
 * Eventos geolocalizacion
 */
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);

/*
* Capturamos el final del evento "drag"
*/
marker.on('dragend', function(event) {
  let markerDragged = event.target;
  var position = marker.getLatLng();
  markerDragged
    .setLatLng(position)
    .bindPopup(position)
    .update();
  map.panTo(position);
  setPointData(position);
  insideCircle(markerDragged);
});

/*
* Capturamos el la geolocalización con un evento correcto
*/
function onLocationFound(e) {

  let radius = e.accuracy / 2;
  L.circle(e.latlng, {
    radius: radius,
    fillColor: 'red',
    color: 'red'
  }).addTo(map)

  marker
    .setLatLng(e.latlng)
    .addTo(map)
    .bindPopup('Estas a ' + radius + ' metros de este punto')
    .openPopup();
  
  setPointData(e.latlng);
  map.flyTo(e.latlng);
  
  insideCircle(marker);
}

/*
* Capturamos la información sobre si está dentro del circulo o no
*/
function insideCircle(marker) {
  let circle = L.circle([39.5712929506796, 2.661173], {
    color: 'red',
    fillColor: '#ff00ff',
    fillOpacity: 0.3,
    radius: 13
  }).addTo(map);

  const contains = circle.getBounds().contains(marker.getLatLng());
  const distance = Math.round(circle.getLatLng().distanceTo(marker.getLatLng()));

  if(contains) {
    document.getElementsByClassName('contains')[0].classList.remove('hidden');
    document
      .getElementsByClassName('not-contains')[0]
      .classList.add('hidden');
  }
  else {
    document
      .getElementsByClassName('contains')[0]
      .classList.add('hidden');
    document
      .getElementsByClassName('not-contains')[0]
      .classList.remove('hidden');
    document.getElementsByClassName('distance')[0].innerHTML = distance;
  }

}

/*
* Mostramos en el formulario las posiciones donde hemos hecho click
*/
function setPointData(position) {
  document.getElementById('lat').value = position.lat;
  document.getElementById('lng').value = position.lng;
}


/*
* Capturamos el error de la geolocalización
*/
function onLocationError(event) {
  alert(event.message);
}