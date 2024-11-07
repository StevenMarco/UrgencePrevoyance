import { useState } from "react";
import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import "./App.css";
import PageAccueil from "./component/PageAccueil";

function App() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageAccueil />
      <PageArticles />
      <ArticleMap />
    </div>

    
  );
}

export default App;