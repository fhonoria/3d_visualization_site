import React from "react";
import profile from "../photos/profile.jpg";
import "./About.css";

function About(props) {
  return (
    <div className="about">
      <section>
        <h1>Introduction</h1>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={profile} alt="profile_photo" className="img-fluid"></img>
          </div>
          <div className="col-8 header-text">
            <h3>
              I am Sandor Juhasz. Architect and 3D visualiser. Welcome to my
              site! I am Sandor Juhasz. Architect and 3D visualiser. Welcome to
              my site! I am Sandor Juhasz. Architect and 3D visualiser. Welcome
              to my site! I am Sandor Juhasz. Architect and 3D visualiser.
              Welcome to my site!
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
    </div>
  );
}

export default About;
