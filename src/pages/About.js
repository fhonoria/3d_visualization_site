import React, { Fragment } from "react";
import profile from "../photos/profile.jpg";
import "./About.css";
import ReactHtmlParser from "react-html-parser";

function About(props) {
  let content = {
    English: {
      title: "About me",
      description:
        "I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site! I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site! I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site! I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site!",
      worksButton: "Works",
      contactButton: "Contact",
      reasonTitle: "Reasons to order 3D visualisation:",
      reasons: `<li>Improves attractivity of the building</li>
              <li>Expedites investor´s decision-making</li>
              <li>Increases sales</li>
              <li>Helps you to stay ahead of competition</li>
              <li>Contributes to a modern company image</li>`,
    },
    German: {
      title: "Über mich",
      description:
        "Ich bin Sandor Juhasz. Architekt und 3D Visualisierer. Wilkommen auf meiner Webseite! Ich bin Sandor Juhasz. Architekt und 3D Visualisierer. Wilkommen auf meiner Webseite! Ich bin Sandor Juhasz. Architekt und 3D Visualisierer. Wilkommen auf meiner Webseite!",
      worksButton: "Portfolio",
      contactButton: "Kontakt",
      reasonTitle: "Warum 3D?",
      reasons: `<li>verbessert die Attraktivität des Gebäudes</li>
              <li>beschleunigt die Entscheidungsfindung von Investoren</li>
              <li>steigert den Verkauf</li>
              <li>generiert einen konkurreznfähigen Vorteil</li>
              <li>modernes Unternehmensdesign</li>`,
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="about">
      <section>
        <h1>{content.title}</h1>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={profile} alt="profile_photo" className="img-fluid"></img>
          </div>
          <div className="col-lg-8 header-text">
            <Fragment>
              <h3>{content.description}</h3>
              <br />
              <h2>
                <strong>{content.reasonTitle}</strong>
              </h2>
              <div className="listing">
                <ul>{ReactHtmlParser(content.reasons)}</ul>
              </div>
            </Fragment>

            <div className="buttons">
              <a href="./Works" className="btn btn-branding">
                {content.worksButton}
              </a>
              <a href="./Contact" className="btn btn-branding">
                {content.contactButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
