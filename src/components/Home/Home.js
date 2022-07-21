import "./Home.css";
import bgFootage from './bgFootage.mp4'

function Home() {
  return (
    <div>
      <header>Welcome to Spike Planted</header>
      <p>
        Valorant is a 5v5 tactical shooter game where players will choice of 20
        agents to choose from. Here you will find the general information of
        each agent's ability, roles they specialize in, and many more!
      </p>
      <video src={bgFootage} autoPlay loop muted />
    </div>
  );
}

export default Home;
