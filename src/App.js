import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import AgentList from "./components/AgentList/AgentList";
import Arsenal from "./components/Arsenal/Arsenal";
import ValorantCover from "./valorant_cover.png";
import ThisAgent from './components/Agents/Agents'
import "./App.css";

function App() {
  return (
    <div>
    <img src={ValorantCover} alt="ValorantCover" className="ValCover" />
    <nav>
      <Link to="/"> <h1>Home</h1> </Link>
      <Link to="/agentlist"> <h1>Agents</h1> </Link>
      <Link to="/arsenal">  <h1>Arsenal</h1>  </Link>
    </nav>
    <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/agentlist" element={<AgentList />}/>
        <Route path="/arsenal" element={<Arsenal />}/>
        <Route path='/agents/:uuid' element={<ThisAgent />}/>
        <Route path='/arsenal/:displayName' element={<ThisAgent />}/>
      </Routes>
    </main> 
    </div> 
  );
}

export default App;