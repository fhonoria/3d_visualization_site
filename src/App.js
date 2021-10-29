import React from "react";
import "./App.css";
import photo from "./3dsample.jpeg";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/reports" exact component={Reports} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>

      <header className="App-header">
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
              <a href="src/Works" className="btn btn-branding">
                Works
              </a>
              <a href="https://www.google.com/" className="btn btn-branding">
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
            <div className="row">
              <div className="col-4">
                <i class="fas fa-building icon"></i>
                <h4>3D exterior visualisation</h4>
              </div>
              <div className="col-4">
                <i class="fas fa-couch icon"></i>
                <h4>3D interior visualisation</h4>
              </div>
              <div className="col-4">
                <i class="fas fa-drafting-compass icon"></i>
                <h4>3D floor plans</h4>
              </div>
            </div>
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
            <a
              href="https://www.google.com/"
              className="btn btn-branding request-button"
            >
              Send your request
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}
// alternative <i class="fas fa-sign"></i>