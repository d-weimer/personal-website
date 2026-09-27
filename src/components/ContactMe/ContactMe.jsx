import { useState } from "react";

import "./ContactMe.css";

function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: "" });

    try {
      const response = await fetch("http://localhost:3002/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setFormData({ name: "", email: "", message: "" });
      setStatus({
        loading: false,
        success: "Message sent successfully!",
        error: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || "Something went wrong.",
      });
    }
  };

  return (
    <section className="contact">
      <form onSubmit={handleSubmit} className="contact__form">
        <div className="contact__name">
          <label htmlFor="form-name" className="contact__label">
            Name
          </label>
          <input
            className="contact__input"
            id="form-name"
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact__email">
          <label htmlFor="form-email" className="contact__label">
            Email
          </label>
          <input
            className="contact__input"
            id="form-email"
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact__message">
          <label htmlFor="form-message" className="contact__label">
            Message
          </label>
          <textarea
            className="contact__input-message"
            id="form-message"
            name="message"
            placeholder="Message..."
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="contact__button-container">
          <button
            type="submit"
            className="contact__button"
            disabled={status.loading}
          >
            {status.loading ? "Sending..." : "Send"}
          </button>
        </div>

        {status.success && (
          <p className="contact__status contact__status--success">
            {status.success}
          </p>
        )}
        {status.error && (
          <p className="contact__status contact__status--error">
            {status.error}
          </p>
        )}
      </form>
    </section>
  );
}

export default ContactMe;
