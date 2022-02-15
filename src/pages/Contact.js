import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

function Contact(props) {
  let content = {
    English: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
      message: "Message",
      alert:
        "Thank you for your message. We will get in touch with you as soon as possible!",
    },
    German: {
      title: "Kontakt",
      email: "E-Mail",
      phone: "Telefon",
      message: "Nachricht",
      alert:
        "Vielen Dank für Ihre Nachricht. Wir melden uns schnellstmöglich bei Ihnen!",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_escf7mf",
        "template_lvzhhma",
        event.target,
        "user_9W0zDMPkyDJCBEnO65xtf"
      )
      .then(alertMessage);
  }

  function alertMessage() {
    alert(`${content.alert}`);
    window.location.reload();
  }

  return (
    <div className="contact">
      <div className="container" style={{ marginTop: "50px", width: "60%" }}>
        <section>
          <h1>{content.title}</h1>
        </section>
        <section>
          <form
            className="row"
            enctype="multipart/form-data"
            method="post"
            onSubmit={sendEmail}
          >
            <label>Name</label>
            <input type="text" name="name" className="form-control" />

            <label>{content.email}</label>
            <input type="text" name="user_email" className="form-control" />

            <label>{content.message}</label>
            <textarea name="message" rows="4" className="form-control" />

            <label>Attach file</label>
            <input type="file" name="user_file" className="form-control" />

            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary"
              style={{ marginTop: "30px" }}
            />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Contact;

//subscription is needed for file attachment
