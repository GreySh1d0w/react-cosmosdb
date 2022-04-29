import React, { Component } from "react";
import { div } from "react/lib/ReactDOMFactories";
import "./App.css";

// import { Navbar, Nav, Container } from 'react-bootstrap';
import Heroes from "./components/Heroes";

class App extends Component {
  render() {
    return (

      <div>
        <div className="heading">
        <h1>Anti Procrastinator</h1>
        </div>
        <div className="header-bar" />
        <app-heroes />
        <div className="mainGG">
        <Heroes />
        </div>
      </div>

    );
  }
}

export default App;
