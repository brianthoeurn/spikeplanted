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
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <img className="Agentpic" src={agent.fullPortraitV2} alt="Agent" />
      <p>{agent.displayName}</p>
      <p>{agent.description}</p>

      {retrieved &&
        agent.abilities.map((ability, i) => {
          const { slot, displayName, description, displayIcon } = ability;
          return (
            <React.Fragment key={i}>
              <img src={displayIcon} alt="display_icon" />
              <p>Ability Slot: {slot}</p>
              <p>Display Name: {displayName}</p>
              <p>descriptiont: {description}</p>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default ThisAgent;
