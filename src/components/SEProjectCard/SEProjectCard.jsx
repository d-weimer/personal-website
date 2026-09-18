import "./SEProjectCard.css";

function SEProjectCard({ project, onCardClick }) {
  const hasMedia = project.media && project.media.length > 0;

  const handleCardClick = () => {
    if (hasMedia) {
      onCardClick();
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`software-card ${!hasMedia ? "software-card--disabled" : ""}`}
      onClick={handleCardClick}
    >
      <div className="software-card__container">
        <div className="software-card__thumbnail-container">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="software-card__thumbnail"
          />
        </div>
        <div className="software-card__content">
          <p className="software-card__title">{project.title}</p>
          <p className="software-card__description">
            {project.shortDescription}
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="software-card__link"
              onClick={handleLinkClick}
            >
              View Live Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default SEProjectCard;
