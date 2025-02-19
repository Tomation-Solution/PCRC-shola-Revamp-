import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import bnr1 from "./../../images/background/bg-5.png";
import pic1 from "./../../images/gallery/pic1.jpg";
import pic2 from "./../../images/gallery/pic2.jpg";
import pic8 from "./../../images/gallery/pic8.jpg";

const images = [
  {
    default: pic1,
  },
  {
    default: pic2,
  },
  {
    default: pic8,
  },
];

class About extends React.Component {
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
    const options = {
      loop: true,
      autoplay: true,
      margin: 30,
      nav: false,
      dots: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        991: {
          items: 1,
        },
      },
    };
    return (
      <>
        <div
          className="section-full mobile-page-padding p-t80 p-b30 bg-dark bg-repeat square_shape2 bg-moving"
          style={{ backgroundImage: "url(" + bnr1.default + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-white text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">About</span>{" "}
                    pcrc
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            <div className="section-content">
              <div className="row">
                <div className="col-md-9 col-sm-12">
                  <OwlCarousel
                    className="owl-carousel about-home owl-btn-vertical-center"
                    {...options}
                  >
                    {images.map((item, index) => (
                      <div className="item" key={index}>
                        <div className="mt-img-effect zoom-slow">
                          <NavLink to="/about">
                            <img src={item.default} alt="" />
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
                <div className="col-md-3 col-sm-12">
                  <div className="about-home-right bg-white p-a30">
                    <h3 className="m-t0">
                      {/* <span className="font-weight-100">
                           
                          </span>   */}
                      PCRC - Police Community Relations Committee
                    </h3>
                    <p>
                      <strong>
                        The PCRC, which stands for Police Community Relations
                        Committee, is an organization dedicated to community
                        policing and operates as part of the Nigeria Police
                        Force. It was established in 1984 with the primary
                        objective of fostering stronger relationships between
                        local communities and the police force.
                      </strong>
                    </p>
                    <p>
                      By enhancing these relationships, the PCRC aims to improve
                      the effectiveness and efficiency of policing in Nigerian
                      communities. Through collaborative efforts and open
                      communication, the PCRC strives to create safer and more
                      secure environments for all residents.
                    </p>
                    <div className="text-right">
                      <NavLink
                        to="/about"
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
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
            <strong>About</strong>
          </div>
        </div>
      </>
    );
  }
}

export default About;
