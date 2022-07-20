import { useEffect, useState } from "react";


function Agents() {
  const [allAgents, setallAgents] = useState([]);
  const loadAgent = () => {
    fetch("https://valorant-api.com/v1/agents/")
    .then ((res) => res.json())
    .then((data) => setallAgents(data.data))
  };

  useEffect(() => {
    loadAgent();
  }, []);

 let ShowAgentList = allAgents.map(item => {
  if (item.isPlayableCharacter === true)
  return (
    <div key={item.fullPortrait}>

      <img className='allAgents' src={item.fullPortrait} alt='test'>
        </img>
    </div>
  )
 })
  return (
    <div>{ShowAgentList}</div>
  );
}

export default Agents;
