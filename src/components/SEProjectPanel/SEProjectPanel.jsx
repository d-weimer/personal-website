import { useEffect } from "react";

import "./SEProjectPanel.css";
import panelClose from "../../assets/close-button.svg";

function SEProjectPanel({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

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
        <h3 className="software-panel__title">{project.title}</h3>
        <p className="software-panel__description">
          {project.longDescription || project.shortDescription}
        </p>
      </div>
    </section>
  );
}

export default SEProjectPanel;
