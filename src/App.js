import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Agents from "./components/Agents/Agents";
import Weapons from "./components/Weapons/Weapon";
import Sprays from "./components/Sprays/Sprays";
import ValorantCover from "./valorant_cover.png";
import "./App.css";

function App() {
  return (
    <div>
    <img src={ValorantCover} alt="ValorantCover" className="ValCover" />
    <nav>
      <Link to="/"> <h1>Home</h1> </Link>
      <Link to="/agents"> <h1>Agents</h1> </Link>
      <Link to="/weapons">  <h1>Weapons</h1>  </Link>
      <Link to="/sprays"> <h1>Sprays</h1> </Link>
    </nav>
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/agents" element={<Agents />}/>
        <Route path="/weapons" element={<Weapons />}/>
        <Route path="/sprays" element={<Sprays />}/>
      </Routes>
    </main>
    </div> 
  );
}

export default App;