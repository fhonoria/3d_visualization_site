import React, { Fragment } from "react";
import "./Workflow.css";
import ReactHtmlParser from "react-html-parser";

function Workflow(props) {
  let content = {
    English: {
      firstTitle: "Analysis",
      firstDescription: `<p>
              All I need is some architectural sketches, blueprints or drawings
              in any format and all the details you have regarding the project.
              <br />
              The more information, the better results.
            </p>`,
      secondTitle: "3D white modell",
      thirdTitle: "Previews",
      fourthTitle: "Final visualisation",
    },
    German: {
      firstTitle: "Analyse",
      firstDescription: `<p>
              Alles, was ich brauche, sind Ihre architektonische Skizzen,  I need is some architectural Zeichnungen, Entwürfe und Pläne und alle Details, die Sie mir zur Verfügung stellen können.
              <br />
              Je mehr Informationen, desto besser das Ergebnis.
            </p>`,
      secondTitle: "3D Weissmodell",
      thirdTitle: "Vorabzüge",
      fourthTitle: "Finale Visualisierung",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="workflow">
      <div className="container listing">
        <Fragment>
          <h2>
            <strong>1. {content.firstTitle}</strong>
          </h2>
          {ReactHtmlParser(content.firstDescription)}
          <p>.......</p>
        </Fragment>
        <h2>2. {content.secondTitle}</h2>
        <p>Text text text text</p>
        <h2>3. {content.thirdTitle}</h2>
        <p>Text text text text</p>
        <h2>4. {content.fourthTitle}</h2>
        <p>Text text text text</p>
      </div>
    </div>
  );
}

export default Workflow;
