import "./Home.css";
import gamePlay from "./123.mp4";

function Home() {
  return (
    <div className="why">
      <p className="valInfo">
        Valorant is a 5v5 tactical shooter game where players will be able to
        play as an agent with special abilties! Here you will find the general
        information of each agent's ability, roles they specialize in, and many
        more!
      </p>
      <div className="bgVideo">
        <video
          width={550}
          src={gamePlay}
          autoPlay
          loop
          muted
        />
      </div>
      <a
        href="https://playvalorant.com/en-us/"
        target="_blank"
        rel="noreferrer"
        className="playNow"
      >
        Play Now
      </a>
    </div>
  );
}

export default Home;
