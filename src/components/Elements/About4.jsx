import React from "react";
import { NavLink } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pic5 from "./../../images/gallery/portrait/pic5.jpg";
import pic6 from "./../../images/gallery/portrait/pic6.jpg";
import pic7 from "./../../images/gallery/portrait/pic7.jpg";
import pic1 from "./../../images/gallery/portrait/pic1.jpg";
import bnr1 from "./../../images/background/line.png";

const images = [
  {
    default: pic5,
  },
  {
    default: pic6,
  },
  {
    default: pic7,
  },
  {
    default: pic1,
  },
];

class About4 extends React.Component {
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
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1,
      dots: true,
    };
    return (
      <>
        <div className="section-full p-t30 p-b80 bg-white inner-page-padding">
          <div className="container">
            <div className="section-content ">
              <div className="row">
                <div className="col-md-5 col-sm-6">
                  <div className="m-about ">
                    <OwlCarousel
                      className="owl-carousel about-us-carousel"
                      {...options}
                    >
                      {images.map((item, index) => (
                        <div className="item" key={index}>
                          <div className="ow-img">
                            <NavLink to="/about">
                              <img src={item.default} alt="" />
                            </NavLink>
                          </div>
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                </div>
                <div className="col-md-7 col-sm-6">
                  <div className="m-about-containt text-black p-t80">
                    <div
                      className="m-about-years bg-moving"
                      style={{
                        backgroundImage: "url(" + bnr1.default + ")",
                      }}
                    >
                      <span className="text-primary large-title">34+</span>
                      <span className="large-title-info">
                        Years of Humanity
                      </span>
                    </div>

                    <h3 className="font-weight-600">
                      Enhancing public safety through a comprehensive and
                      unified approach.
                    </h3>
                    <p>
                      Our team will oversee all aspects, including crime
                      prevention initiatives, management of police contracts,
                      handling of requests for information (RFI) and document
                      submissions, enforcement of traffic regulations, and
                      efficient case closure.
                    </p>
                    <div className="author-info p-t20">
                      {/* <div className="author-signature">
                                                <img src={require('./../../images/Signature+Black.png').default} alt="Signature" width={150} />
                                            </div>
                                            <div className="author-name">
                                                <h4 className="m-t0">David Houkr</h4>
                                                <p>Architect &amp; Founder</p>
                                            </div> */}
                      <NavLink
                        to="/contactus"
                        className="site-button btn-effect m-b15"
                      >
                        <span>Get in touch</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About4;
