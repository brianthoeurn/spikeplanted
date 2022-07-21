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

  let ShowAgentList = allAgents.map((item) => {
    if (item.isPlayableCharacter === true)
      return (
        <div key={item.fullPortrait}>
          <Link to={"/agents/" + item.uuid}>
            <img className="allAgents" src={item.fullPortrait} alt="test"></img>
          </Link>
        </div>
      );
  });
  return <div>{ShowAgentList}</div>;
}

export default AgentList;