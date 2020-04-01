import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Project, Me, Classroom } from "./pages";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  const [currentLink, setCurrentLink] = useState("me");
  return (
    <>
      <div className="app-container">
        <Header currentLink={currentLink} setCurrentLink={setCurrentLink} />
        <div className="space"></div>
        <Route exact path="/portfolio" component={Me} />
        <Switch>
          <Route path="/portfolio/me" component={Me} />
          <Route
            path="/portfolio/class"
            render={() => <Classroom setCurrentLink={setCurrentLink} />}
          />
          <Route
            path="/portfolio/project"
            render={() => <Project setCurrentLink={setCurrentLink} />}
          />
        </Switch>
      </div>
    </>
  );
};

export default App;
