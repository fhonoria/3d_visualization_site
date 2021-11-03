import React from "react";
import "./Works.css";
import Services from "../components/Services";
import exterior1 from "../photos/final_mo_day.jpg";
import exterior2 from "../photos/final_mo_night.jpg";
import exterior3 from "../photos/final_night_2_ps.jpg";
import exterior4 from "../photos/final_day_2_ps.jpg";
import interior1 from "../photos/Mo_daylight_final.jpg";
import interior2 from "../photos/Mo_night_final.jpg";
import interior3 from "../photos/Night_final_ps.jpg";
import interior4 from "../photos/Daylight_final_ps.jpg";
import object1 from "../photos/Mo_closeup_final.jpg";
import object2 from "../photos/Closeup_final_ps.jpg";
import floorphoto from "../photos/floorplans.jpeg";
import product1 from "../photos/Backpack_01.jpg";
import product2 from "../photos/Backpack_02.jpg";
import product3 from "../photos/Portable_TV_01.jpg";
import product4 from "../photos/Portable_TV_02.jpg";
import product5 from "../photos/Sword_01.jpg";
import product6 from "../photos/Sword_02.jpg";

function Works(props) {
  let content = {
    English: {
      titleExterior: "3D exterior visualisation",
      titleInterior: "3D interior visualisation",
      title3dFloorplan: "3D floor plans",
      titleProduct: "3D product visualisation",
    },
    German: {
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
    <div className="works">
      <section>
        <h1>Portfolio</h1>
      </section>
      <Services language={props.language} />
      <div className="container">
        <section id="exterior">
          <h2>{content.titleExterior}</h2>
          <div className="row">
            <div className="col-6">
              <img
                src={exterior1}
                className="img-fluid mb-4"
                alt="exterior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={exterior4}
                className="img-fluid mb-4"
                alt="exterior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={exterior2}
                className="img-fluid mb-4"
                alt="exterior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={exterior3}
                className="img-fluid mb-4"
                alt="exterior"
              ></img>
            </div>
          </div>
        </section>
        <section id="interior">
          <h2>{content.titleInterior}</h2>
          <div className="row">
            <div className="col-6">
              <img
                src={interior1}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={interior4}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={interior2}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={interior3}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={object1}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={object2}
                className="img-fluid mb-4"
                alt="interior"
              ></img>
            </div>
          </div>
        </section>
        <section id="floor-plans">
          <h2>{content.title3dFloorplan}</h2>
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
        <section id="product-design">
          <h2>{content.titleProduct}</h2>
          <div className="row">
            <div className="col-6">
              <img
                src={product1}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={product2}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={product3}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={product4}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={product5}
                className="img-fluid mb-4"
                alt="3d floor plans"
              ></img>
            </div>
            <div className="col-6">
              <img
                src={product6}
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
