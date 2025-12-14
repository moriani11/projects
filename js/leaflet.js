document.addEventListener("DOMContentLoaded", function () {

    const map = L.map('map').setView([50.85045, 4.34878], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19
    }).addTo(map);

const logoIcon = L.icon({
    iconUrl: "assets/logo/car.png",
    iconSize: [50, 25],     // kleinere marker
    iconAnchor: [25, 12],   // midden-onder
    popupAnchor: [0, -12]   // popup een beetje erboven
});


    // Marker 1 — Brussel showroom
    L.marker([50.85045, 4.34878], { icon: logoIcon })
        .addTo(map)
        .bindPopup("<b>Luxe Rijders Hoofdshowroom</b><br>Brussel");

    // Marker 2 — Antwerpen testlocatie
    L.marker([51.21989, 4.40346], { icon: logoIcon })
        .addTo(map)
        .bindPopup("<b>Luxe Rijders Testlocatie</b><br>Antwerpen");
    
});
