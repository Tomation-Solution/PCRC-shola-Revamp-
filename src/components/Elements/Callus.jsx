import React from "react";
import { NavLink } from "react-router-dom";
import bnr1 from "../../images/background/bg-1.jpg";

class Callus extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
          style={{ backgroundImage: "url(" + bnr1.default + ")" }}
        >
          <div className="overlay-main bg-primary opacity-07" />
          <div className="container">
            <div className="section-content">
              <div className="call-us-section text-center">
                <h4 className="m-b15">Let's work together</h4>
                <h2 className="call-us-number m-b15 m-b0">
                  +234 802 321 7199 +234 802 307 7348
                </h2>
                <h4 className="call-us-address m-t0 m-b20">
                  PCRC HALL Area H Command Head Quarters, Ogudu Ojota, Lagos
                  State, Nigeria
                </h4>
                {/* <NavLink
                  to="/contactus"
                  className="site-button-secondry btn-effect bg-dark"
                >
                  Contact Us
                </NavLink> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Callus;
