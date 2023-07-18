import React from "react";
import { NavLink } from "react-router-dom";

const services = [
  {
    count: 1,
    title: `Strengthening Community-Police Collaboration for Effective Policing in Nigeria`,
    icon: require("./../../images/icon/crane-1.png"),
    description:
      "We The PCRC – Police Community Relations Committee – is a community policing organization and is a part of the Nigeria police force. The organization was established in 1984 and its main objective was to increase the relationship with local communities and the police force. Subsequently, this will make policing in Nigerian communities more effective and efficient.",
  },
  {
    count: 2,
    title:
      "PCRC: Building Strong Community-Police Partnerships in Lagos State and Beyond",
    icon: require("./../../images/icon/renovation.png"),
    description:
      "PCRC follows a similar structure as the Nigerian police force. Hence, they have area commands, divisions, zonal commands, national components, and state commands amongst others. While PCRC is present in many Nigerian states, the organization is most renowned in Lagos State.",
  },
  {
    count: 3,
    title:
      "Fostering Trust and Safety: PCRC's Commitment to Community Engagement and Professional Policing",
    icon: require("./../../images/icon/toolbox.png"),
    description:
      "Since the organization is all about police and community relationship, officers are mainly trained on how to show better conduct and countenances when dealing with locals. They engage with the community to source useful information that the police can use in keeping the place safe.",
  },
  {
    count: 4,
    title:
      "Empowering Communities: PCRC's Proactive Efforts in Combatting Cultism and Drug Abuse",
    icon: require("./../../images/icon/compass.png"),
    description:
      "For example, the PCRC carries out campaigns in communities to warn youths against cultism and drug abuse. They often hold public lectures, training, town hall meetings, and a lot others to sensitize the community about the need to refrain from crime.",
  },
];

var img1 = require("./../../images/background/ptn-1.png");

class Specialization4 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-tb80 bg-white bg-repeat square_shape2 inner-page-padding"
          style={{ backgroundImage: "url(" + img1.default + ")" }}
        >
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-left">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 text-primary">What</span>{" "}
                    we Do
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="row">
                {services.map((item, index) => (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="mt-icon-box-wraper m-b30">
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                        <span className="icon-count-number">{item.count}</span>
                        <div className="icon-md inline-icon m-b15 text-primary scale-in-center">
                          <span className="icon-cell">
                            <img src={item.icon.default} alt="" />
                          </span>
                        </div>
                        <div className="icon-content">
                          <h4
                            style={{
                              color: "#000000",
                            }}
                          >
                            {item.title}
                          </h4>
                          <p>{item.description}</p>
                          {/* <NavLink
                            to={"/services"}
                            className="site-button-link"
                            data-hover="Read More"
                          >
                            Read More{" "}
                            <i className="fa fa-angle-right arrow-animation" />
                          </NavLink> */}
                        </div>
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

export default Specialization4;
