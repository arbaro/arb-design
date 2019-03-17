import React, { Component } from "react";
import { Home } from "./pages/Home";
import logo from "./logo.svg";
import AppHeader from './components/AppHeader';
import Company from './components/Company';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <Company />
      </div>
    );
  }
}

export default App;
