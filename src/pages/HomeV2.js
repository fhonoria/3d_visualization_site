import React from "react";
import "./HomeV2.css";
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import exterior4 from "../photos/final_day_2_ps.jpg";
import interior4 from "../photos/Daylight_final_ps.jpg";
import object2 from "../photos/Closeup_final_ps_cropped.jpg";
import floorphoto from "../photos/floorplans.jpeg";

function HomeV2(props) {
  let content = {
    English: {
      title: "3D visualisation",
      worksButton: "Works",
      contactButton: "Contact",
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
      title: "3D Visualisierung",
      worksButton: "Portfolio",
      contactButton: "Kontakt",
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
    <div className="homev2">
      <div className="container">
        <h1>{content.title}</h1>
        <div className="row">
          <div className="col-3">
            <img src={exterior4} alt="exterior" className="img-fluid"></img>
            <a href="./Works#exterior" className="work-button">
              <HiIcons.HiOfficeBuilding className="building-icon " />
              <h4>
                <strong className="text-uppercase">
                  {content.categoryExterior}
                </strong>
              </h4>
              <h4>{content.titleExterior}</h4>
            </a>
          </div>
          <div className="col-3">
            <img src={interior4} alt="interior" className="img-fluid"></img>
            <a href="./Works#interior" className="work-button">
              <FaIcons.FaCouch className="couch-icon" />
              <h4>
                <strong className="text-uppercase">
                  {content.categoryInterior}
                </strong>
              </h4>
              <h4>{content.titleInterior}</h4>
            </a>
          </div>
          <div className="col-3">
            <img src={floorphoto} alt="3d_floor" className="img-fluid"></img>
            <a href="./Works#floor-plans" className="work-button">
              <FaIcons.FaDraftingCompass className="compass-icon" />
              <h4>
                <strong className="text-uppercase">
                  {content.category3dFloorplan}
                </strong>
              </h4>
              <h4>{content.title3dFloorplan}</h4>
            </a>
          </div>
          <div className="col-3">
            <img src={object2} alt="product_design" className="img-fluid"></img>
            <a href="./Works#product-design" className="work-button">
              <HiIcons.HiLightBulb className="bulb-icon" />
              <h4>
                <strong className="text-uppercase">
                  {content.categoryProduct}
                </strong>
              </h4>
              <h4>{content.titleProduct}</h4>
            </a>
          </div>
        </div>
        <section className="redirecting-buttons">
          <a href="./Works" className="btn btn-branding">
            {content.worksButton}
          </a>
          <a href="./Contact" className="btn btn-branding">
            {content.contactButton}
          </a>
        </section>
      </div>
    </div>
  );
}

export default HomeV2;
