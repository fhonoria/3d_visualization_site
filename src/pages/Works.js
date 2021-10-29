import React from "react";
import "./Works.css";
import photo from "../photos/3dsample.jpeg";
import interiorphoto from "../photos/interiorsample.jpeg";
import floorphoto from "../photos/floorplans.jpeg";
import Services from "../components/Services";

function Works() {
  return (
    <div className="works">
      <section>
        <h1>Portfolio</h1>
      </section>
      <Services />
      <div className="container">
        <section id="exterior">
          <h2>3D exterior visualisation</h2>
          <div className="row">
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
            <div className="col-4">
              <img src={photo} className="img-fluid mb-4" alt="exterior"></img>
            </div>
          </div>
        </section>
        <section id="interior">
          <h2>3D interior visualisation</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={interiorphoto}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
          </div>
        </section>
        <section id="floor-plans">
          <h2>3D floor plans</h2>
          <div className="row">
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-4">
              <img
                src={floorphoto}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Works;
