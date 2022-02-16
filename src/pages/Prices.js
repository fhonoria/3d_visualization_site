import React from "react";
import Services from "../components/Services";
import "./Prices.css";

function Prices(props) {
  let content = {
    English: {
      title: "Prices",
      orderButton: "Order",
    },
    German: {
      title: "Preise",
      orderButton: "Bestellen",
    },
  };

  props.language === "German"
    ? (content = content.German)
    : (content = content.English);

  return (
    <div className="prices">
      <section>
        <h1>{content.title}</h1>
      </section>
      <Services language={props.language} />
      <div className="container">
        <div className="row">
          <div className="col-3 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding orderbutton">
              {content.orderButton}
            </a>
          </div>
          <div className="col-3 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding orderbutton">
              {content.orderButton}
            </a>
          </div>
          <div className="col-3 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding orderbutton">
              {content.orderButton}
            </a>
          </div>
          <div className="col-3 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding orderbutton">
              {content.orderButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
