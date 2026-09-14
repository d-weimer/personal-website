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
            Hi, I&apos;m Daniel Weimer! I&apos;m an aspiring Full-stack Software
            Engineer with a robust background in full-stack development, QA
            engineering, and technical project management. <br />
            <br />
            I love taking complex visual prototypes and design layouts and
            turning them into clean, scalable applications, whether I&apos;m
            working with vanilla JavaScript or building modern React apps and
            Node.js backends. <br />
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
