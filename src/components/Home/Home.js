import "./Home.css";
import bgFootage from './bgFootage.mp4'

function Home() {
  return (
    <div>
      <header className="header">Welcome to Spike Planted</header>
      
      <video src={bgFootage} autoPlay loop muted />
      <p>
        Valorant is a 5v5 tactical shooter game where players will be able to play as an agent with special abilties! Here you will find the general information of
        each agent's ability, roles they specialize in, and many more!
      </p>
    </div>
  );
}

export default Home;
