import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import Homev1 from "./pages/Homev1";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";
import Workflow from "./pages/Workflow";
import Footer from "./components/Footer";

export default function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );

  return (
    <div className="App">
      <Router>
        <Navbar
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home language={language} />}
          />
          <Route
            path="/about"
            component={() => <About language={language} />}
          />
          <Route
            path="/works"
            component={() => <Works language={language} />}
          />
          <Route
            path="/workflow"
            component={() => <Workflow language={language} />}
          />
          <Route
            path="/prices"
            component={() => <Prices language={language} />}
          />
          <Route
            path="/contact"
            component={() => <Contact language={language} />}
          />
          <Route path="/home" component={() => <Home language={language} />} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
