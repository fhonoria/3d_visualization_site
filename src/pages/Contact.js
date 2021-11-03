import React from "react";
import "./Contact.css";

function Contact(props) {
  let content = {
    English: {
      title: "Contact",
      email: "Email",
      phone: "Phone",
    },
    German: {
      title: "Kontakt",
      email: "E-Mail",
      phone: "Telefon",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="contact">
      <section>
        <h1>{content.title}</h1>
      </section>
      <section>
        <h2 className="mb-3">{content.email}</h2>
        <a href="mailto:juhasz.sandor.1988@gmail.com">
          juhasz.sandor.1988@gmail.com
        </a>
      </section>
      <section>
        <h2 className="mb-3">Instagram</h2>
        <a
          href="https://www.instagram.com/v_h_i_s_3d"
          target="_blank"
          rel="noreferrer"
        >
          @v_h_i_s_3d
        </a>
      </section>
      <section>
        <h2 className="mb-3">{content.phone}</h2>
        <p>+49 162 1234 5678</p>
      </section>
    </div>
  );
}

export default Contact;
