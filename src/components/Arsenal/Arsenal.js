import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Arsenal() {
  const [allArsenal, setallArsenal] = useState([]);

  const loadAgent = () => {
    fetch("https://valorant-api.com/v1/weapons")
      .then((res) => res.json())
      .then((data) => setallArsenal(data.data));
  };

  useEffect(() => {
    loadAgent();
  }, []);

  let ShowArsenalList = allArsenal.map((item) => {
      return (
        <div key={item.displayIcon}>
          <Link to={"/agents/" + item.displayName}>
            <img className="allAgents" src={item.displayIcon} alt="test"></img>
          </Link>
        </div>
      );
  });
  return <div>{ShowArsenalList}</div>;
}

export default Arsenal;
