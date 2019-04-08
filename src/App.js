import React, { Component } from "react";
import Navbar from "./components/Navbar/navbar";
import Register from "./components/Register/register";
import Login from "./components/Login/login";
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
            <Route path="/user/register" component={Register} />>
            <Route path="/user/login" component={Login} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
