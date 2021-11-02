import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
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
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/prices" component={Prices} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
