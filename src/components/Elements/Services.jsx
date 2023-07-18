import React from "react";
import { NavLink } from "react-router-dom";
import compass from "./../../images/icon/compass.png";
import img1 from "./../../images/services/1.jpg";
import crane from "./../../images/icon/crane-1.png";
import img2 from "./../../images/services/3.jpg";
import renovation from "./../../images/icon/renovation.png";
import img3 from "./../../images/services/2.jpg";

const services = [
  {
    count: 1,
    title: `Architecture Design`,
    icon: compass,
    image: img1,
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 2,
    title: "Building Construction",
    icon: crane,
    image: img2,
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
  {
    count: 3,
    title: "Building Renovation",
    icon: renovation,
    image: img3,
    description:
      "lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.",
  },
];

class Services extends React.Component {
  render() {
    return (
      <>
        <div className="section-full bg-white slider-half-part">
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-4 col-sm-4 m-b30" key={index}>
                    <div className="half-blocks">
                      <div className="mt-icon-box-wraper center m-b30">
                        <div className="half-block-content icon-count-2 p-a30 p-tb50">
                          <span className="icon-count-number">
                            {item.count}
                          </span>
                          <div className="mt-icon-box-lg radius bg-gray m-b20 scale-in-center">
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
                        <div
                          className="bg-cover  half-blocks-bg"
                          style={{
                            backgroundImage: "url(" + item.image.default + ")",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
