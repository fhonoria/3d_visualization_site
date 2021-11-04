import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import HomeV2 from "./pages/HomeV2";
import Works from "./pages/Works";
import About from "./pages/About";
import Prices from "./pages/Prices";
import Contact from "./pages/Contact";

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
            path="/prices"
            component={() => <Prices language={language} />}
          />
          <Route
            path="/contact"
            component={() => <Contact language={language} />}
          />
          <Route
            path="/homev2"
            component={() => <HomeV2 language={language} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
