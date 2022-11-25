//mapa inicializado
var map = L.map('map').setView([-25.953724, 32.588711], 12);

//camada osm
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})
osm.addTo(map);