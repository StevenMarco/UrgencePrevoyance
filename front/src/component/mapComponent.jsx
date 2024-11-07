import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
  const center = [43.6835848, 7.2273575]; // Coordonnées centrales (ex: Londres)
  const zoom = 13;

  return (
    <div style={{ width: "500px", height: "500px", margin: "auto" }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ width: "100%", height: "100%", borderRadius: "0.5rem" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={center}>
          <Popup>Une localisation centrale</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
