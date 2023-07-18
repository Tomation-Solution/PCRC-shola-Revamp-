import React from "react";
import { NavLink } from "react-router-dom";
import bnr1 from "./../../images/background/bg-6.png";
import img2 from "./../../images/services/1.jpg";
import img3 from "./../../images/services/2.jpg";
import img4 from "./../../images/services/3.jpg";

class Specialization3 extends React.Component {
  render() {
    return (
      <>
        <div
          className="section-full p-t80 p-b50 bg-dark mobile-page-padding"
          style={{ backgroundImage: "url(" + bnr1 + ")" }}
        >
          <div className="container">
            {/* IMAGE CAROUSEL START */}
            <div className="section-content">
              <div className="section-head m-b50 text-white text-center">
                <h3 className="m-t0">
                  We are all constructed out of our self dialogue.
                </h3>
                {/*   */}
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={img2} alt="" />
                    <div className="figcaption">
                      <h4>Concept and Design</h4>
                      {/* <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p> */}
                      <NavLink to="/project-detail">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={img3} alt="" />
                    <div className="figcaption">
                      <h4>Refurbishment</h4>
                      {/* <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p> */}
                      <NavLink to="/project-detail">
                        <i className="link-plus bg-primary" />
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 m-b30">
                  <div className="image-effect-one hover-shadow">
                    <img src={img4} alt="" />
                    <div className="figcaption bg-dark">
                      <h4>General Builder</h4>
                      {/* <p>Est notare quam littera gothica, quam nunc putamus parum claram.</p> */}
                      <NavLink to="/project-detail">
                        <i className="link-plus bg-primary" />
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

export default Specialization3;
