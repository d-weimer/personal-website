import "./ContactMe.css";

function ContactMe() {
  return (
    <section className="contact">
      <div className="contact__name">
        <p className="contact__label">Name</p>
        <input className="contact__input" type="text" />
      </div>
      <div className="contact__email">
        <p className="contact__label">Email</p>
        <input className="contact__input" type="text" />
      </div>
      <div className="contact__message">
        <p className="contact__label">Message</p>
        <input className="contact__input-message" type="text" />
      </div>
      <button className="contact__button">Send</button>
    </section>
  );
}

export default ContactMe;
