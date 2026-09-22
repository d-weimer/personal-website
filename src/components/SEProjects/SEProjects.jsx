import { useState } from "react";

import "./SEProjects.css";
import SEProjectCard from "../SEProjectCard/SEProjectCard";
import SEProjectPanel from "../SEProjectPanel/SEProjectPanel";
import { SOFTWARE_PROJECT_DATA } from "../../utils/softwareProjectData.js";

function SEProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="software">
      <div className="software__grid">
        {SOFTWARE_PROJECT_DATA.map((project) => (
          <SEProjectCard
            key={project.projectId}
            project={project}
            onCardClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <SEProjectPanel
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default SEProjects;
