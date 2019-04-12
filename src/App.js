import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" />
            <Route path="/users/register" component={Register} />
            <Route path="/users/login" component={Login} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
