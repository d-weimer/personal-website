import "./HobbyGameDev.css";
import GameCard from "../GameCard/GameCard";
import { GAME_DEVELOPMENT_DATA } from "../../utils/gameDevData.js";

function HobbyGameDev() {
  return (
    <section className="game-dev">
      <div className="game-dev__grid">
        {GAME_DEVELOPMENT_DATA.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </div>
    </section>
  );
}

export default HobbyGameDev;
