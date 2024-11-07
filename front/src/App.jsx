import { useState } from "react";
import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import PagePartenaires from "./component/partenaires";
import "./App.css";

function App() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageArticles />
      <ArticleMap />
      <PagePartenaires />
    </div>

    
  );
}

export default App;