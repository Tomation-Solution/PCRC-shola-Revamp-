import React from 'react';
// import { NavLink } from 'react-router-dom';

class AboutCompany extends React.Component {
    render() {
        return (
          <>
            <div className="section-full p-t80 bg-white">
              <div className="container">
                <div className="section-content ">
                  <div className="m-service-containt text-black">
                    <div className="row">
                      <div className="col-md-5 col-sm-12">
                        <div className="service-about-left">
                          <div className="mt-media">
                            <img
                              src={require("./../../images/s-1.png").default}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-7 col-sm-12">
                        <div className="service-about-right m-b30">
                          <h3 className="m-t0">
                            In our work we have pride, quality is what we
                            provide.
                          </h3>
                          <p>
                            focusing on business expansion through innovative
                            engineering and technology, operating with high
                            ethical standard and integrity, Ensuring that
                            highest standards of safety and environmental
                            management are complied with while providing
                            specialized, fit-for-purpose equipment, supported by
                            well trained and motivated employees, and returning
                            profits to our company”.
                          </p>
                          {/* <div className="call-for-quote-outer">
                            <div className="call-quote">
                              <span>Call For a Quote:</span>
                              <h4>(321) 456 6789</h4>
                            </div>
                            <div className="call-estimate bg-dark">
                              <NavLink
                                to={"#"}
                                className="site-button-secondry btn-effect"
                              >
                                Online Estimate Form
                              </NavLink>
                            </div>
                          </div> */}
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
};

export default AboutCompany;