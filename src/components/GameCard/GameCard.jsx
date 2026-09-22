import "./GameCard.css";

function GameCard({ game }) {
  const isClickable = Boolean(game.link);

  const handleClick = () => {
    if (isClickable) {
      window.open(game.link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`game-dev-card ${!isClickable ? "game-dev-card--disabled" : ""}`}
      onClick={handleClick}
    >
      <div className="game-dev-card__image-wrapper">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="game-dev-card__thumbnail"
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="game-dev-card__content">
        <h3 className="game-dev-card__title">{game.title}</h3>
        {game.description && (
          <p className="game-dev-card__description">{game.description}</p>
        )}

        {isClickable ? (
          <span className="game-dev-card__link">Play / View Project →</span>
        ) : (
          <span className="game-dev-card__no-link">No Public Demo</span>
        )}
      </div>
    </div>
  );
}

export default GameCard;
