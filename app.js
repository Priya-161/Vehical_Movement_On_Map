let map = L.map('map').setView([17.385044, 78.486671], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

let vehicleIcon = L.icon({
    iconUrl: 'C:\\Users\\Priya\\OneDrive\\Desktop\\blockly\\sport-car.png',  // Updated path to local image
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
});

let routeCoordinates = [
    [17.385044, 78.486671], [17.387056, 78.489743], [17.389072, 78.491829],
    [17.391086, 78.494917], [17.393097, 78.497005], [17.395108, 78.499093],
    [17.397119, 78.501181], [17.399130, 78.503269], [17.401141, 78.505357],
    [17.403152, 78.507445], [17.405163, 78.509533], [17.407174, 78.511621],
    [17.409185, 78.513709], [17.411196, 78.515797], [17.413207, 78.517885],
    [17.415218, 78.519973], [17.417229, 78.522061], [17.419240, 78.524149],
    [17.421251, 78.526237], [17.423262, 78.528325], [17.425273, 78.530413],
    [17.427284, 78.532501], [17.429295, 78.534589], [17.431306, 78.536677]
];

let routePolyline = L.polyline(routeCoordinates, { color: 'blue' }).addTo(map);

let vehicleMarker = L.marker(routeCoordinates[0], { icon: vehicleIcon }).addTo(map);

let speed = 500;
let positionIndex = 0;
let moving = false;

function startMovement() {
    if (moving) return;
    moving = true;
    let interval = setInterval(() => {
        vehicleMarker.setLatLng(routeCoordinates[positionIndex]);
        positionIndex = (positionIndex + 1) % routeCoordinates.length;
        if (!moving) clearInterval(interval);
    }, speed);
}

document.getElementById('startButton').addEventListener('click', startMovement);
