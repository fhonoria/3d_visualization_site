import React from "react";
import "./Services.css";

function Services(props) {
  console.log(props);
  let content = {
    English: {
      titleExterior: "3D exterior visualisation",
      titleInterior: "3D interior visualisation",
      title3dFloorplan: "3D floor plans",
    },
    German: {
      titleExterior: "3D Außenarchitektur Visualisierung",
      titleInterior: "3D Innenarchitektur Visualisierung",
      title3dFloorplan: "3D Grundrisse",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="services">
      <div className="container">
        <section className="works-header">
          <div className="row">
            <div className="col-4">
              <a href="./Works#exterior" className="work-button">
                <i class="fas fa-building icon"></i>
                <h4>{content.titleExterior}</h4>
              </a>
            </div>
            <div className="col-4">
              <a href="./Works#interior" className="work-button">
                <i class="fas fa-couch icon"></i>
                <h4>{content.titleInterior}</h4>
              </a>
            </div>
            <div className="col-4">
              <a href="./Works#floor-plans" className="work-button">
                <i class="fas fa-drafting-compass icon"></i>
                <h4>{content.title3dFloorplan}</h4>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
