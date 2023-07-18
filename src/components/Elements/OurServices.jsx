import React from "react";
import { NavLink } from "react-router-dom";
import bnr1 from "./../../images/background/bg-5.png";
import crane_1 from "./../../images/icon/crane-1.png";
import renovation from "./../../images/icon/renovation.png";
import toolbox from "./../../images/icon/toolbox.png";
import compass from "./../../images/icon/compass.png";
import img1 from "./../../images/background/bg-6.png";

const services = [
  {
    count: 1,
    title: `Project and Construction Management`,
    icon: crane_1,
    description:
      "We provide owners with the day-to-day design management as part of a larger project. ",
  },
  {
    count: 2,
    title: "Site Selection",
    icon: renovation,
    description:
      "We have a unique methodology for uncovering and “creating” new sites.We maintain full in-house real estate brokerage capabilities...",
  },
  {
    count: 3,
    title: "Risk Assessments and Entitlements",
    icon: toolbox,
    description:
      "Our team will clearly communicate to you the expectations, risks, and opportunities of your particular entitlement challenge.",
  },
  //   {
  //     count: 4,
  //     title: "Architecture Design",
  //     icon: require("./../../images/icon/compass.png"),
  //     description:
  //       "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  //   },
];

class OurServices extends React.Component {
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
  render() {
    return (
      <>
        <div className="section-full mobile-page-padding  p-b50  square_shape2">
          <div className="section-content">
            <div
              className="Service-half-top p-t80  bg-dark bg-moving"
              style={{ backgroundImage: "url(" + img1.default + ")" }}
            >
              <div className="container">
                {/* TITLE START */}
                <div className="section-head text-white">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-white text-uppercase sep-line-one ">
                        <span className="font-weight-300 text-primary">
                          Our
                        </span>{" "}
                        Services
                      </h2>
                    </div>
                  </div>
                  <h3>
                    Using unique methods of extracting value while
                    simultaneously providing the highest standards of quality
                    are the hallmarks of our construction team’s process.
                  </h3>
                </div>
                {/* TITLE END */}
              </div>
            </div>
            <div className="services-half-bottom">
              <div className="container">
                <div className="row">
                  {services.map((item, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                      <div className="mt-icon-box-wraper m-b30">
                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                          <span className="icon-count-number">
                            {item.count}
                          </span>
                          <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                            <span className="icon-cell">
                              <img src={item.icon.default} alt="" />
                            </span>
                          </div>
                          <div className="icon-content">
                            <h4 className="mt-tilte m-b25">{item.title}</h4>
                            <p>{item.description}</p>
                            <NavLink
                              to={"/services"}
                              className="site-button-link"
                              data-hover="Read More"
                            >
                              Read More{" "}
                              <i className="fa fa-angle-right arrow-animation" />
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>Services</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurServices;
