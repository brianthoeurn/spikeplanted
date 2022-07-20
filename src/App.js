import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AgentList from "./components/AgentList/AgentList";
import Weapons from "./components/Weapons/Weapon";
import Sprays from "./components/Sprays/Sprays";
import ValorantCover from "./valorant_cover.png";
import Agents from './components/Agents/Agents'
import "./App.css";

function App() {
  return (
    <div>
    <img src={ValorantCover} alt="ValorantCover" className="ValCover" />
    <nav>
      <Link to="/"> <h1>Home</h1> </Link>
      <Link to="/agentlist"> <h1>Agents</h1> </Link>
      <Link to="/weapons">  <h1>Weapons</h1>  </Link>
      <Link to="/sprays"> <h1>Sprays</h1> </Link>
    </nav>
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/agentlist" element={<AgentList />}/>
        <Route path="/weapons" element={<Weapons />}/>
        <Route path="/sprays" element={<Sprays />}/>
        <Route path='/agents/:displayName' element={<Agents />}/>
      </Routes>
    </main>
    </div> 
  );
}

export default App;