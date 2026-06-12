import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EX1 from "./pages/EX1";
import EX2 from "./pages/EX2";
import EX3 from "./pages/EX3";
import EX4 from "./pages/EX4";
import EX5 from "./pages/EX5";
import EX6 from "./pages/EX6";
import EX7 from "./pages/EX7";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ex1" element={<EX1 />} />
          <Route path="ex2" element={<EX2 />} />
          <Route path="ex3" element={<EX3 />} />
          <Route path="ex4" element={<EX4 />} />
          <Route path="ex5" element={<EX5 />} />
          <Route path="ex6" element={<EX6 />} />
          <Route path="ex7" element={<EX7 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
