import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "./../../images/left-men.png";
import img2 from "./../../images/background/bg-4.png";
import img3 from "./../../images/background/bg-site.png";
import img4 from "./../../images/mission.jpg";

class OurMission extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
          // style={{
          //   backgroundImage:
          //     "url(" + img1.default + "), url(" + img2.default + ")",
          // }}
        >
          <div className="section-content">
            <div className="container">
              {/* TITLE START */}
              <div className="section-head">
                <div className="mt-separator-outer separator-center">
                  <div className="mt-separator">
                    <h2 className="text-uppercase sep-line-one ">
                      <span className="font-weight-300 text-primary">
                        Emmergency
                      </span>{" "}
                      Numbers
                    </h2>
                  </div>
                </div>
              </div>
              {/* TITLE END */}
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <div
                    className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                    style={{ backgroundImage: "url(" + img3.default + ")" }}
                  >
                    <h3 className="m-t0">
                      <span className="font-weight-100">
                        Listed are the Lagos State emergency telephone numbers.
                      </span>
                      {/* <br /> Use these numbers when you need to contact any of
                      the agencies:{" "} */}
                    </h3>
                    {/* <p>
                      From inception to completion, our team is involved every
                      step of the way: pre-construction planning, obtaining
                      entitlements, budget development and execution,
                      scheduling, contract procurement, and close-out.
                    </p> */}

                    {/* <div className="text-right">
                      <NavLink
                        to="/about"
                        className="site-button-link"
                        data-hover="Read More"
                      >
                        Read More{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </NavLink>
                    </div> */}
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <ul className="list-angle-right anchor-line">
                    <li>
                      <strong>Emergency Management (LASEMA)</strong>{" "}
                      08060907333, 08023127654, 08022234870, 016574706,
                      016574714
                    </li>
                    <li>
                      <strong>Nigeria Police</strong> 08033011052, 08056250710,
                      08033183477
                    </li>
                    <li>
                      <strong>NDLEA</strong> 0803347868
                    </li>
                    <li>
                      <strong>NAFDAC</strong> 014528031, 014731018
                    </li>
                    <li>
                      <strong>Fake Drugs/ Narcotics (Task Force)</strong>{" "}
                      08033213799, 08034975296
                    </li>
                    <li>
                      <strong>Distress Call</strong> 767, 112
                    </li>
                    <li>
                      <strong>
                        Environmental & Special Offences Task Force
                      </strong>{" "}
                      07055028673
                    </li>
                    <li>
                      <strong>Refuse Issues (LAWMA)</strong> 5577 (Toll Free)
                      07080601020, 08023128099
                    </li>
                    <li>
                      <strong>Land Issues</strong> 08034030263
                    </li>
                    <li>
                      <strong>
                        Vehicle Registration/Drivers License (MVAA)
                      </strong>{" "}
                      08029293099
                    </li>
                    <li>
                      <strong>Tax Issues (LIRS)</strong> 08033033121,
                      08033047270, 014979030-4
                    </li>
                    <li>
                      <strong>Fire/Safety Services</strong> 08033234943,
                      08023321770
                    </li>
                    <li>
                      <strong>Security Trust Fund</strong> 08028328204
                    </li>
                    <li>
                      <strong>Signage/Outdoor Advertising(LASAA)</strong> 767,
                      112
                    </li>
                    <li>
                      <strong>Environmental/Noise Pollution (LASEPA)</strong>{" "}
                      08033060452
                    </li>
                    <li>
                      <strong>Cutting of Roads (LASMIRA)</strong> 08033060452
                    </li>
                    <li>
                      <strong>Broken Pipe/Water Leakage</strong> 08034068265
                    </li>
                    <li>
                      <strong>Pothole/Collapsed Road</strong> 090 6704 4444(Text
                      & WhatsApp only). 070 8888 1841(Calls)
                    </li>
                    <li>
                      <strong>Lagbus</strong> 08033036816
                    </li>
                    <li>
                      <strong>BRT</strong> 08023146096
                    </li>
                    <li>
                      <strong>DSS ANTI KIDNAP HELP LINES</strong> 081012723022,
                      08025713190, 08176878575, 09058530351
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="contact-home1-left bg-dark p-a30 m-b0">
                    <h3 className="text-white m-t0">
                      <span className="font-weight-100">Get In</span> Touch
                    </h3>
                    <form
                      className="cons-contact-form2 form-transparent"
                      method="post"
                      action=""
                    >
                      <div className="input input-animate">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="username" id="name" required />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" name="phone" id="Phone" required />
                        <span className="spin" />
                      </div>
                      <div className="input input-animate">
                        <label htmlFor="message">Textarea</label>
                        <textarea
                          name="message"
                          id="message"
                          required
                          defaultValue={""}
                        />
                        <span className="spin" />
                      </div>
                      <div className="text-center p-t10">
                        <button
                          type="submit"
                          className="site-button btn-effect "
                        >
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
            <strong>emergency numbers</strong>
          </div>
        </div>
      </>
    );
  }
}

export default OurMission;
