import React from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./main.module.scss";

const Main = () => {
  return (
    <main>
      <h1>Main</h1>
      <Switch>
        <Route />
        <Route />
        <Route />
      </Switch>
    </main>
  );
};

export default Main;
