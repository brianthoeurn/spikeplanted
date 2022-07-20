import { useEffect, useState } from "react";
import { useResolvedPath } from "react-router-dom";

function Agents() {
  const [agent, setAgent] = useState([]);
  const loadAgent = () => {
    fetch("https://valorant-api.com/v1/agents/dade69b4-4f5a-8528-247b-219e5a1facd6")
    .then ((res) => res.json())
    .then((data) => setAgent(data.data))
  };

  useEffect(() => {
    loadAgent();
  }, []);

  return (
    <div>
        <img src={agent.bustPortrait} />
        <h1>
        {agent.displayName}
        </h1>
        
    </div>
  );
}

export default Agents;
