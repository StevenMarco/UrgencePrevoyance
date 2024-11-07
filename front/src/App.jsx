import { useState } from "react";
import "./App.css";
import MapComponent from "./component/mapComponent";
import InputAddress from "./component/inputAddress";
import PageArticles from "./component/PageArticles";

function App() {
  return (
    <div>
      <h1>Carte dans un conteneur de 500x500px</h1>
      <MapComponent />
      <InputAddress />
      <PageArticles />
    </div>

    
  );
}

export default App;
