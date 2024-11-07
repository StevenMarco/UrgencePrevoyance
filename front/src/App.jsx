import { useState } from "react";
import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import "./App.css";

function App() {
  return (
    <div style={{paddingTop: "100px"}}>
      <PageArticles />
      <ArticleMap />
    </div>

    
  );
}

export default App;