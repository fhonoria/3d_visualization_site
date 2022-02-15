import React from "react";
import "./Services.css";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";

function Services(props) {
  let content = {
    English: {
      categoryExterior: "Architecture",
      categoryInterior: "Interior Design",
      category3dFloorplan: "Real estate",
      categoryProduct: "Product Design",
      titleExterior: "3D exterior visualisation",
      titleInterior: "3D interior visualisation",
      title3dFloorplan: "3D floor plans",
      titleProduct: "3D product visualisation",
    },
    German: {
      categoryExterior: "Architektur",
      categoryInterior: "Innenarchitektur",
      category3dFloorplan: "Immobilien",
      categoryProduct: "Produktdesign",
      titleExterior: "3D Architektur Visualisierung",
      titleInterior: "3D Innenraum Visualisierung",
      title3dFloorplan: "3D Grundrisse",
      titleProduct: "3D Produktvisualisierung",
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
            <div className="col-3">
              <a href="./Works#exterior" className="work-button">
                <HiIcons.HiOfficeBuilding className="building-icon" />
              </a>
            </div>
            <div className="col-3">
              <a href="./Works#interior" className="work-button">
                <FaIcons.FaCouch className="couch-icon" />
              </a>
            </div>
            <div className="col-3">
              <a href="./Works#floor-plans" className="work-button">
                <FaIcons.FaDraftingCompass className="compass-icon" />
              </a>
            </div>
            <div className="col-3">
              <a href="./Works#product-design" className="work-button">
                <HiIcons.HiLightBulb className="bulb-icon" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h4>
                <strong className="text-uppercase">
                  {content.categoryExterior}
                </strong>
              </h4>
            </div>
            <div className="col-3">
              <h4>
                <strong className="text-uppercase">
                  {content.categoryInterior}
                </strong>
              </h4>
            </div>
            <div className="col-3">
              <h4>
                <strong className="text-uppercase">
                  {content.category3dFloorplan}
                </strong>
              </h4>
            </div>
            <div className="col-3">
              <h4>
                <strong className="text-uppercase">
                  {content.categoryProduct}
                </strong>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <h4>{content.titleExterior}</h4>
            </div>
            <div className="col-3">
              <h4>{content.titleInterior}</h4>
            </div>
            <div className="col-3">
              <h4>{content.title3dFloorplan}</h4>
            </div>
            <div className="col-3">
              <h4>{content.titleProduct}</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Services;
