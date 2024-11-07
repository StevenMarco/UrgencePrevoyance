import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import PageArticles from "./component/PageArticles";
import ArticleMap from "./component/articleMap";
import "./App.css";
import MapComponent from "./component/mapComponent";
import Quiz from "./Quiz";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;