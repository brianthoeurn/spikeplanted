import "./AgentList.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AgentList() {
  const [allAgents, setallAgents] = useState([]);

  const loadAgent = () => {
    fetch("https://valorant-api.com/v1/agents/")
      .then((res) => res.json())
      .then((data) => {
        const customData = data.data;
        console.log(data.data);
        customData.push({
          uuid: "https://www.linkedin.com/in/brianmonirath",
          displayName: "Monirath",
          fullPortrait:
            "https://cdn.discordapp.com/attachments/853891866575896586/984172384191909908/unknown.png",
          isPlayableCharacter: true,
          isCustomCharacter: true,
        });
        setallAgents(customData);
      });
  };

  useEffect(() => {
    loadAgent();
  }, []);

  const ShowAgentList = allAgents.map((data) => {
    if (data.isPlayableCharacter === true) {
      if (data.isCustomCharacter === true) {
        return (
          <div key={data.fullPortrait} className="agentCard">
            <a href={data.uuid} target="_blank" rel="noreferrer">
              <p className="agentName">{data.displayName}</p>
              <img className="Agents" src={data.fullPortrait} alt="test" />
            </a>
          </div>
        );
      } else {
        return (
          <div key={data.fullPortrait} className="agentCard">
            <Link to={"/agents/" + data.uuid}>
              <p className="agentName">{data.displayName}</p>
              <img className="Agents" src={data.fullPortrait} alt="test" />
            </Link>
          </div>
        );
      }
    }
    return <></>;
  });
  return (
    <div className="agentListBody">
      <div className="allAgents">{ShowAgentList}</div>
    </div>
  );
}

export default AgentList;
