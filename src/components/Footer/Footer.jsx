import "./Footer.css";
import github from "../../assets/github.svg";
import itchio from "../../assets/itchio.svg";
import linkedin from "../../assets/linkedin.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <p className="footer__title">
          &copy; 2026 Developed by Daniel J. Weimer
        </p>
        <div className="footer__socials">
          <a
            href="https://github.com/d-weimer"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <img className="footer__icon" src={github} alt="GitHub" />
          </a>
          <a
            href="https://danielweimer.itch.io/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <img className="footer__icon" src={itchio} alt="itch.io" />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-weimer/"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
          >
            <img className="footer__icon" src={linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
