import "./Agent.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ThisAgent = () => {
  const [agent, setAgent] = useState([]);
  const { uuid } = useParams();
  const [retrieved, setRetrieved] = useState(false);

  useEffect(() => {
    getAgent();
  }, []);

  const getAgent = () => {
    fetch(`https://valorant-api.com/v1/agents/${uuid}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log("Response error");
        }
      }, [])
      .then((data) => {
        setAgent(data.data);
        setRetrieved(true);

      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="agentInfo" key={'info'}>
      <p className="agentName" key={'displayName'}>{agent.displayName}</p>
      <div className="Bio">
          <p className="agentDesc" key={'agentDescript'}>{agent.description}</p>
          <img className="AgentPic" src={agent.fullPortraitV2} alt="Agent" key={'fullPort'}/>
      </div>


      {retrieved &&
        agent.abilities.map((ability) => {
          const { displayName, description, displayIcon } = ability;
          return (
            <div className="allAbilities">
              <img src={displayIcon} alt="display_icon" key={'icon'} className='abilityIcon'/>
              <p key={'abilityName'}>{displayName} </p>
              <p key={'abilityInfo'}>: {description} </p>
            </div>
          );
        })}
    </div>
  );
};

export default ThisAgent;
