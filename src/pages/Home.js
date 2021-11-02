import React, { Fragment } from "react";
import Services from "../components/Services";
import photo from "../photos/final_day_2_ps.jpg";
import "./Home.css";
import ReactHtmlParser from "react-html-parser";

function Home(props) {
  let content = {
    English: {
      title: "3D visualisation",
      description:
        "I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site!",
      worksButton: "Works",
      contactButton: "Contact",
      reasonTitle: "Reasons to order 3D visualisation",
      reasons: `<li>Improves attractivity of the building</li>
              <li>Expedites investor´s decision-making</li>
              <li>Increases sales</li>
              <li>Helps you to stay ahead of competition</li>
              <li>Contributes to a modern company image</li>`,
      startTitle: "To start with...",
      startDescription: `<p>
              All I need is some architectural sketches, blueprints or drawings
              in any format and all the details you have regarding the project.
              <br />
              The more information, the better results.
            </p>`,
      requestButton: "Send your request",
    },
    German: {
      title: "3D Visualisierung",
      description:
        "Ich bin Sandor Juhasz. Architekt und 3D Visualisierer. Wilkommen auf meiner Webseite!",
      worksButton: "Portfolio",
      contactButton: "Kontakt",
      reasonTitle: "Gute Gründe 3D Pläne zu bestellen",
      reasons: `<li>Verbessert die Attraktivität des Gebäudes</li>
              <li>Beschleunigt die Entscheidungsfindung von den Investoren</li>
              <li>Steigert den Verkauf</li>
              <li>Hilft vor der Konkurrenz in Führung zu bleiben</li>
              <li>Trägt zu einem modernen Unternehmensimage bei</li>`,
      startTitle: "zum Start der Zusammenarbeit...",
      startDescription: `<p>
              Alles, was ich brauche, sind Ihre architektonische Skizzen,  I need is some architectural Zeichnungen, Entwürfe und Pläne und alle Details, die Sie mir zur Verfügung stellen können.
              <br />
              Je mehr Informationen, desto besser das Ergebnis.
            </p>`,
      requestButton: "Anfrage senden",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="home">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img src={photo} alt="3d_main_photo" className="img-fluid"></img>
            </div>
            <div className="col-4 header-text">
              <h1>{content.title}</h1>
              <h3>{content.description}</h3>
              <a href="./Works" className="btn btn-branding">
                {content.worksButton}
              </a>
              <a href="./Contact" className="btn btn-branding">
                {content.contactButton}
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <section>
            <h2>Services</h2>
            <Services />
          </section>
          <section>
            <Fragment>
              <h2>{content.reasonTitle}</h2>
              <ul>{ReactHtmlParser(content.reasons)}</ul>
            </Fragment>
          </section>
          <section>
            <Fragment>
              <h2>{content.startTitle}</h2>
              {ReactHtmlParser(content.startDescription)}
              <a href="./Contact" className="btn btn-branding request-button">
                {content.requestButton}
              </a>
            </Fragment>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
