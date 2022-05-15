import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarChart from "./pages/BarChart/BarChart";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barchart" element={<BarChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
