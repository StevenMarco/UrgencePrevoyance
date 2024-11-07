import { useState } from "react";
import "./App.css";
import MapComponent from "./component/mapComponent";
import InputAddress from "./component/inputAddress";

function App() {
  return (
    <div>
      <h1>Carte dans un conteneur de 500x500px</h1>
      <MapComponent />
      <InputAddress />
    </div>
  );
}

export default App;
