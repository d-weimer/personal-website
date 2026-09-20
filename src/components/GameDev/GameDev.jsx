import { useState } from "react";
import "./GameDev.css";
import GameNavigation from "../GameNavigation/GameNavigation.jsx";
import GameCard from "../GameCard/GameCard.jsx";
import { GAME_DEVELOPMENT_DATA } from "../../utils/gameDevData.js";

function GameDev() {
  const [filter, setFilter] = useState("featured");

  const sortedGames = [...GAME_DEVELOPMENT_DATA].sort((a, b) =>
    b.gameId.localeCompare(a.gameId, undefined, { numeric: true }),
  );

  const filteredGames = sortedGames.filter((game) => {
    if (filter === "featured") {
      return Boolean(game.featured);
    }
    return game.type === filter;
  });

  return (
    <section className="game-dev">
      <GameNavigation selectedType={filter} onSelectType={setFilter} />
      <div className="game-dev__grid">
        {filteredGames.map((game) => (
          <GameCard key={game.gameId} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GameDev;
