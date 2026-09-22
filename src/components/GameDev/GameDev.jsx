import { useState, useRef, useEffect } from "react";

import "./GameDev.css";
import GameNavigation from "../GameNavigation/GameNavigation.jsx";
import GameCard from "../GameCard/GameCard.jsx";
import { GAME_DEVELOPMENT_DATA } from "../../utils/gameDevData.js";

function GameDev() {
  const [filter, setFilter] = useState("featured");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const trackRef = useRef(null);

  const sortedGames = [...GAME_DEVELOPMENT_DATA].sort((a, b) =>
    b.gameId.localeCompare(a.gameId, undefined, { numeric: true }),
  );

  const filteredGames = sortedGames.filter((game) => {
    if (filter === "featured") {
      return game.featured === true || game.featured === "true";
    }
    return game.type === filter;
  });

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;

    setCanScrollLeft(scrollLeft > 1);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [filteredGames]);

  const scroll = (direction) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const cardWidth = container.firstElementChild?.offsetWidth || 300;
    const gap = 24;
    const scrollAmount = (cardWidth + gap) * 3;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="game-dev">
      <GameNavigation selectedType={filter} onSelectType={setFilter} />

      <div className="game-dev__carousel-wrapper">
        <div className="game-dev__track" ref={trackRef}>
          {filteredGames.map((game) => (
            <div className="game-dev__card-item" key={game.gameId}>
              <GameCard game={game} />
            </div>
          ))}
        </div>

        <div className="game-dev__controls">
          <button
            className="game-dev__arrow"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            &lt;
          </button>
          <button
            className="game-dev__arrow"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}

export default GameDev;
