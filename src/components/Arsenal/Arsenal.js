import "./Arsenal.css";
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
      <div key={item.displayIcon} className="wepCard">
        <p className="wepName" key={"wepName"}>
          {item.displayName}
        </p>
        <img
          className="Weapon"
          src={item.displayIcon}
          alt="test"
          key={"wepIcon"}
        ></img>
      </div>
    );
  });
  return (
    <div className="wepBody">
      <div className="allWep">{ShowArsenalList}</div>
    </div>
  );
}

export default Arsenal;
