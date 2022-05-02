import React from "react";
import { NavLink } from "react-router-dom";
// import  {useState} from 'react'

class Navigation extends React.Component {
  componentDidMount() {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/masonary.js");
  }

  constructor(props) {
    super(props);
    this.state = {
      activeNav: "#",
    };
  }

  render() {
    return (
      <>
        <div
          className={
            this.props.bgcolor !== ""
              ? `header-nav navbar-collapse collapse ${this.props.bgcolor}`
              : "header-nav navbar-collapse collapse"
          }
        >
          <ul className="nav navbar-nav">
            <li className={this.state.activeNav === "#" ? "active" : ""}>
              <NavLink to={""}>Home</NavLink>
            </li>
            <li
              onClick={() => this.setState({ activeNav: "about" })}
              className={this.state.activeNav === "about" ? "active" : ""}
            >
              <NavLink to={"/about"}>About us</NavLink>
            </li>
            <li
              onClick={() => this.setState({ activeNav: "services" })}
              className={this.state.activeNav === "services" ? "active" : ""}
            >
              <NavLink to={"/services"}>Services</NavLink>
            </li>

            <li
              onClick={() => this.setState({ activeNav: "contactus" })}
              className={this.state.activeNav === "contactus" ? "active" : ""}
            >
              <NavLink to={"/contactus"}>Contact us</NavLink>
            </li>
            <li
              onClick={() => this.setState({ activeNav: "project-grid" })}
              className={
                this.state.activeNav === "project-grid" ? "active" : ""
              }
            >
              <NavLink to={"/project-grid"}>Projects</NavLink>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Navigation;
