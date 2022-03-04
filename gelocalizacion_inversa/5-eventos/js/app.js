let map = L.map('map').setView([38.7184319, -9.1482682], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let layerGroup = L.layerGroup().addTo(map);

map.on('click', function(e){
  console.log(e.latlng);
  document.getElementById('lat').innerHTML = e.latlng.lat;
  document.getElementById('lng').innerHTML = e.latlng.lng;

  layerGroup.clearLayers();
  L.marker(e.latlng).addTo(layerGroup);
  getReverseGeocoding(e.latlng);
})

function getReverseGeocoding(coordinates) {
  const app_id = 'ZCqFRii9Ki0tNWMLoPdW';
  const app_code = 'jjEpKvWjFcGxxevjSWSu9g';

  fetch(
    'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox=' +
      coordinates.lat +
      '%2C' +
      coordinates.lng +
      '%2C250&mode=retrieveAddresses&maxresults=1&gen=9&app_id=' +
      app_id +
      '&app_code=' +
      app_code
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data.Response.View[0].Result[0].Location.Address);
      setAddressData(data.Response.View[0].Result[0].Location.Address);
    })
    .catch(function(error) {
      console.log('Error', error.message);
    }); 
}

function setAddressData(address) {
  document.getElementById('address').innerHTML = `
  <p>Dirección encontrada</p>
  <ul>
    <li>Dirección: ${address.Label}</li>
    <li>Ciudad: ${address.City}</li>
    <li>País: ${address.Country}</li>
  </ul>
  `;

}