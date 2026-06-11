import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import EX1 from "./pages/EX1";
import EX2 from "./pages/EX2";
import EX3 from "./pages/EX3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ex1" element={<EX1 />} />
          <Route path="ex2" element={<EX2 />} />
          <Route path="ex3" element={<EX3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
