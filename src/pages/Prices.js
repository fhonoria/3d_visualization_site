import React from "react";
import Services from "../components/Services";
import "./Prices.css";

function Prices() {
  return (
    <div className="prices">
      <h1>Prices</h1>
      <Services />
      <div className="container">
        <div className="row">
          <div className="col-4 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding">
              Order
            </a>
          </div>
          <div className="col-4 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding">
              Order
            </a>
          </div>
          <div className="col-4 column">
            <h2>100€</h2>
            <br />
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <p>Details</p>
            <br />
            <a href="./Contact" className="btn btn-branding">
              Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
