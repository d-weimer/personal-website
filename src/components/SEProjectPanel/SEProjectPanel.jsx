import { useState, useEffect } from "react";

import "./SEProjectPanel.css";
import panelClose from "../../assets/close-button.svg";

function SEProjectPanel({ project, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const mediaList = project.media || [];
  const currentMedia = mediaList[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? mediaList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === mediaList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="software-panel" onClick={onClose}>
      <div
        className="software-panel__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          type="button"
          className="software-panel__close"
        >
          <img
            src={panelClose}
            alt="Close Button"
            className="software-panel__close-button"
          />
        </button>

        <div className="software-panel__container">
          <div className="software-panel__text-container">
            <h3 className="software-panel__title">{project.title}</h3>
            <p className="software-panel__description">
              {project.fullDescription || project.shortDescription}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="software-panel__link"
              >
                View Live Project
              </a>
            )}
          </div>

          {mediaList.length > 0 && currentMedia?.path && (
            <div className="software-panel__slideshow">
              <div className="software-panel__slide">
                <span className="software-panel__slide-counter">
                  {currentIndex + 1} / {mediaList.length}
                </span>
                <img
                  src={currentMedia.path}
                  alt={currentMedia.caption || project.title}
                  className="software-panel__slide-image"
                />
                {currentMedia.caption && (
                  <p className="software-panel__slide-caption">
                    {currentMedia.caption}
                  </p>
                )}
              </div>

              {mediaList.length > 1 && (
                <>
                  <button
                    type="button"
                    className="software-panel__nav-btn software-panel__nav-btn--prev"
                    onClick={handlePrev}
                  >
                    &#10094;
                  </button>
                  <button
                    type="button"
                    className="software-panel__nav-btn software-panel__nav-btn--next"
                    onClick={handleNext}
                  >
                    &#10095;
                  </button>

                  <div className="software-panel__dots">
                    {mediaList.map((_, idx) => (
                      <span
                        key={idx}
                        className={`software-panel__dot ${
                          currentIndex === idx
                            ? "software-panel__dot--active"
                            : ""
                        }`}
                        onClick={() => setCurrentIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SEProjectPanel;
