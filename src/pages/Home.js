import React from "react";
import Services from "../components/Services";
import photo from "../photos/final_day_2_ps.jpg";
import "./Home.css";

function Home(props) {
  let content = {
    English: {
      title: "3D visualisation",
      description:
        "I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my site!",
      reasons: "Reasons to order 3D visualisation",
    },
    German: {
      title: "3D Visualisierung",
      description:
        "Ich bin Sandor Juhasz. Architekt und 3D Visualisierer. Wilkommen auf meiner Webseite!",
      reasons: "Gründe 3D Pläne zu bestellen",
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
                Works
              </a>
              <a href="./Contact" className="btn btn-branding">
                Contact
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
            <h2>{content.reasons}</h2>
            <ul>
              <li>Improves attractivity of the building</li>
              <li>Expedites investor´s decision-making</li>
              <li>Increases sales</li>
              <li>Helps you to stay ahead of competition</li>
              <li>Contributes to a modern company image</li>
            </ul>
          </section>
          <section>
            <h2>To start with...</h2>
            <p>
              All I need is some architectural sketches, blueprints or drawings
              in any format and all the details you have regarding the project.
              <br />
              The more information, the better results.
            </p>
            <a href="./Contact" className="btn btn-branding request-button">
              Send your request
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
