import "./SEProjects.css";
import SEProjectCard from "../SEProjectCard/SEProjectCard";
import SEProjectPanel from "../SEProjectPanel/SEProjectPanel";

function SEProjects() {
  return (
    <section className="software">
      <SEProjectCard />
      <SEProjectPanel />
    </section>
  );
}

export default SEProjects;
