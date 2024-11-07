import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MapComponent from "./component/mapComponent";
import Quiz from "./Quiz";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<MapComponent />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
