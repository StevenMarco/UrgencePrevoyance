import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./Quiz";
import Home from "./Home";
import PageAccueil from "./component/PageAccueil";

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
