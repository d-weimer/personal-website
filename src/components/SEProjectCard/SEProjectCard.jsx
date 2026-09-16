import "./SEProjectCard.css";

function SEProjectCard({ project, onCardClick }) {
  return (
    <div className="software-card" onClick={onCardClick}>
      <div className="software-card__container">
        <div className="software-card__thumbnail-container">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="software-card__thumbnail"
          />
        </div>
        <div className="software-card__content">
          <h3 className="software-card__title">{project.title}</h3>
          <p className="software-card__description">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SEProjectCard;
