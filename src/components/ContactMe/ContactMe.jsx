import "./ContactMe.css";

function ContactMe() {
  return (
    <section className="contact">
      <div className="contact__name">
        <p className="contact__label">Name</p>
        <input
          className="contact__input"
          id="form-name"
          type="text"
          placeholder="Name"
          required
        />
      </div>
      <div className="contact__email">
        <p className="contact__label">Email</p>
        <input
          className="contact__input"
          id="form-email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="contact__message">
        <p className="contact__label">Message</p>
        <textarea
          className="contact__input-message"
          id="form-message"
          placeholder="Message..."
          rows="6"
          required
        />
      </div>
      <div className="contact__button-container">
        <button className="contact__button">Send</button>
      </div>
    </section>
  );
}

export default ContactMe;
