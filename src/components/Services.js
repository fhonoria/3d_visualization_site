import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services">
      <div className="container">
        <section className="works-header">
          <div className="row">
            <div className="col-4">
              <a href="./Works#exterior" className="work-button">
                <i class="fas fa-building icon"></i>
                <h4>3D exterior visualisation</h4>
              </a>
            </div>
            <div className="col-4">
              <a href="./Works#interior" className="work-button">
                <i class="fas fa-couch icon"></i>
                <h4>3D interior visualisation</h4>
              </a>
            </div>
            <div className="col-4">
              <a href="./Works#floor-plans" className="work-button">
                <i class="fas fa-drafting-compass icon"></i>
                <h4>3D floor plans</h4>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
