import React, { useState } from "react";

const InputAddress = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  const getCoordinates = async () => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${address}`
      );
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ lat, lon });
      } else {
        alert("Adresse non trouvée");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des coordonnées:", error);
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <input
        type="text"
        value={address}
        onChange={handleInputChange}
        placeholder="Entrez votre adresse"
        style={{ width: "300px", padding: "10px", fontSize: "1em", marginBottom: "10px" }}
      />
      <button
        onClick={getCoordinates}
        style={{ padding: "10px 20px", fontSize: "1em", cursor: "pointer" }}
      >
        Obtenir les coordonnées
      </button>
      {coordinates && (
        <div>
          <p style={{ fontSize: "1.2em", marginTop: "10px" }}>Latitude: {coordinates.lat}</p>
          <p style={{ fontSize: "1.2em", marginTop: "10px" }}>Longitude: {coordinates.lon}</p>
        </div>
      )}
    </div>
  );
};

export default InputAddress;