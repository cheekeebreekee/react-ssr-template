import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import wizards from "./wizards.jpg";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/news">Test 1</Link>
        <Link to="/feature-content">Test 2</Link>
      </div>
    );
  }
}

export default Home;
