import "./GameDev.css";
import GameNavigation from "../GameNavigation/GameNavigation.jsx";
import GameCard from "../GameCard/GameCard.jsx";
import { GAME_DEVELOPMENT_DATA } from "../../utils/gameDevData.js";

function GameDev() {
  return (
    <section className="game-dev">
      <GameNavigation />
      <div className="game-dev__grid">
        {GAME_DEVELOPMENT_DATA.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GameDev;
