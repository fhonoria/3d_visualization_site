import React from "react";
import Services from "../components/Services";
import photo from "../photos/3dsample.jpeg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <img src={photo} alt="3d_main_photo" className="img-fluid"></img>
            </div>
            <div className="col-4 header-text">
              <h1>3D visualisation</h1>
              <h3>
                I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my
                site!
              </h3>
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
            <h2>Reasons to order 3D visualisation</h2>
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
