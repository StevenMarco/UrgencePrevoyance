import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [coordinates, setCoordinates] = useState(null);
  const [environmentData, setEnvironmentData] = useState({
    coastal: false,
    farmlands: false,
    woodlands: false,
  });
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
        mapRef.current.setView([lat, lon]); // Centrer la carte sur les nouvelles coordonnées
        checkEnvironmentData(lat, lon);
      } else {
        alert("Adresse non trouvée");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des coordonnées:", error);
    }
  };

  const checkEnvironmentData = async (lat, lon) => {
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];(way(around:500,${lat},${lon})[natural=coastline];way(around:500,${lat},${lon})[landuse=farmland];way(around:500,${lat},${lon})[landuse=forest];);out body;`;
    try {
      const response = await fetch(overpassUrl);
      const data = await response.json();
      const coastal = data.elements.some(
        (el) => el.tags.natural === "coastline"
      );
      const farmlands = data.elements.some(
        (el) => el.tags.landuse === "farmland"
      );
      const woodlands = data.elements.some(
        (el) => el.tags.landuse === "forest"
      );
      setEnvironmentData({ coastal, farmlands, woodlands });
    } catch (error) {
      console.error(
        "Erreur lors de la vérification des données environnementales:",
        error
      );
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
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            placeholder="Entrez votre code postal"
            style={{
              width: "300px",
              padding: "10px",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={getCoordinates}
            style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer" }}
          >
            Obtenir les coordonnées
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
        <div style={{ marginTop: "20px" }}>
          <p>
            Zones littorales :{" "}
            {environmentData.coastal ? "Présentes" : "Absentes"}
          </p>
          <p>
            Zones agricoles :{" "}
            {environmentData.farmlands ? "Présentes" : "Absentes"}
          </p>
          <p>
            Zones boisées :{" "}
            {environmentData.woodlands ? "Présentes" : "Absentes"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
