import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const mapRef = useRef();

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };

  const getCoordinates = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address},${postalCode}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ lat, lon });
        mapRef.current.setView([lat, lon], 17); // Centrer la carte sur les nouvelles coordonnées
      } else {
        alert("Adresse non trouvée");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des coordonnées:", error);
    }
  };

  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ lat: latitude, lon: longitude });
          mapRef.current.setView([latitude, longitude], 17); // Centrer la carte sur la position
        },
        (error) => {
          alert("Erreur de géolocalisation: " + error.message);
        }
      );
    } else {
      alert("La géolocalisation n'est pas supportée par votre navigateur.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div style={{ width: "60vw", height: "60vh" }}>
        <div style={{ margin: "20px" }}>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            placeholder="Entrez votre adresse"
            style={{ width: "300px", padding: "10px", fontSize: "1em", marginBottom: "10px" }}
          />
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            placeholder="Entrez votre code postal"
            style={{ width: "300px", padding: "10px", fontSize: "1em", marginBottom: "10px" }}
          />
          <button
            onClick={getCoordinates}
            style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer" }}
          >
            Obtenir les coordonnées
          </button>
          <button
            onClick={handleGeolocation}
            style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer", marginLeft: "10px" }}
          >
            Géolocalisation
          </button>
        </div>
        <MapContainer
          center={[43.6835848, 7.2273575]}
          zoom={17}
          style={{ width: "100%", height: "100%", borderRadius: "50px" }}
          ref={mapRef}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {coordinates && (
            <Marker position={[coordinates.lat, coordinates.lon]}>
              <Popup>
                Adresse trouvée : {coordinates.lat}, {coordinates.lon}
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapComponent;
