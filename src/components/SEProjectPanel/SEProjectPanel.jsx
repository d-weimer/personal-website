import { useEffect } from "react";

import "./SEProjectPanel.css";

function SEProjectPanel({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return <section className="software">Software Panel</section>;
}

export default SEProjectPanel;
