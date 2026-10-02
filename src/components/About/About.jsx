import "./About.css";
import author from "../../assets/author.png";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img
          className="about__avatar"
          src={author}
          alt="Daniel Weimer's profile avatar"
        />
        <div className="about__content">
          <h2 className="about__title">About the developer</h2>
          <p className="about__paragraph">
            Hi, I&apos;m Daniel Weimer! I&apos;m a full-stack software engineer
            with a decade's worth of video game industry experience in Quality
            Assurace, Product Testing, and project management. <br />
            <br />
            As a full-stack software engineer, I build responsive React/Vite
            apps focusing on clean component architecture, interactive media,
            and client-side routing. On the backend, I write RESTful APIs using
            the MERN stack and manage my own deployments on GCP using Nginx,
            SSL, and PM2. <br />
            <br />
            Outside of work, I enjoy hiking, prototyping hobby games, and
            building custom web apps to solve everyday problems.
            <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
