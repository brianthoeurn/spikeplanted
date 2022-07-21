import "./AgentList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AgentList() {
  const [allAgents, setallAgents] = useState([]);

  const loadAgent = () => {
    fetch("https://valorant-api.com/v1/agents/")
      .then((res) => res.json())
      .then((data) => setallAgents(data.data));
  };

  useEffect(() => {
    loadAgent();
  }, []);

  const ShowAgentList = allAgents.map((picture) => {
    if (picture.isPlayableCharacter === true)
      return (
        <div key={picture.fullPortrait} className='allAgents'>
          <Link to={"/agents/" + picture.uuid}>
            <img className="Agents" src={picture.fullPortrait} alt="test"></img>
          </Link>
        </div>
      ); 
  });
  return <div>{ShowAgentList}</div>;
}

export default AgentList;
