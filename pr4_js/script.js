
const ivanoFrankivsk = { lat: 48.9226, lng: 24.7103 };

const map = L.map('map').setView([ivanoFrankivsk.lat, ivanoFrankivsk.lng], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);


const neonIcon = L.divIcon({
  className: "my-div-icon",
  html: `<div style="background:#00ffea; width:30px; height:30px; border-radius:50%; box-shadow:0 0 20px #00ffea; border:3px solid #000; animation:pulse 2s infinite;"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15]
});

const marker = L.marker([ivanoFrankivsk.lat, ivanoFrankivsk.lng], { icon: neonIcon }).addTo(map);

marker.bindPopup(`
  <b>Ти тут, король Прикарпаття!</b><br>
  Івано-Франківськ<br>
  Широта: ${ivanoFrankivsk.lat}<br>
  Довгота: ${ivanoFrankivsk.lng}<br>
  <i>Карпати вітають тебе, братишка</i>
`).openPopup();


const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 234, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(0, 255, 234, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 234, 0); }
}
`;
document.head.appendChild(style);