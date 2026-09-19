import "./GameCard.css";

function GameCard({ game }) {
  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="game-dev-card">
      <div className="game-dev-card__container">
        <div className="game-dev-card__thumbnail-container">
          <img
            src={game.thumbnail}
            alt={game.title}
            className="game-dev-card__thumbnail"
          />
        </div>
        <div className="game-dev-card__content">
          <p className="game-dev-card__title">{game.title}</p>
          <p className="game-dev-card__description">{game.description}</p>
          {game.link && (
            <a
              href={game.link}
              target="_blank"
              rel="noreferrer"
              className="game-dev-card__link"
              onClick={handleLinkClick}
            >
              View Game
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameCard;
