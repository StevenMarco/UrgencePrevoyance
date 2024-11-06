// mapComponent.js
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet";
import L from "leaflet";

function MapComponent() {
  const [location, setLocation] = useState(null);
  const [result, setResult] = useState("");
  const mapRef = useRef();

  const handleClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Recentrer la carte sur la position de l'utilisateur
        const map = mapRef.current;
        map.flyTo([latitude, longitude], 13); // Centrer et zoomer sur la position

        fetch(`http://localhost:5000/api/check-water`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ latitude, longitude }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.found) {
              setResult("Un cours d'eau a été trouvé à proximité !");
            } else {
              setResult("Aucun cours d'eau trouvé à proximité.");
            }
          })
          .catch((error) => {
            console.error("Erreur lors de la requête:", error);
            setResult("Erreur lors de la requête.");
          });
      });
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  };

  return (
    <div style={{ height: "200px", width: "200px" }}>
      {/* Affichage de la carte avec une taille de 200px par 200px */}
      <MapContainer
        center={[43.6835848, 7.2273575]} // Position par défaut
        zoom={2}
        style={{ height: "200px", width: "200px" }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />
        {location && (
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              Vous êtes ici : {location.latitude}, {location.longitude}
            </Popup>
          </Marker>
        )}
      </MapContainer>

      {/* Bouton pour récupérer la position et effectuer l'appel API */}
      <button onClick={handleClick}>
        Vérifier les cours d'eau à proximité
      </button>
      <p>{result}</p>
    </div>
  );
}

export default MapComponent;
