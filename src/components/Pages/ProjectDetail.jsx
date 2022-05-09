import React from "react";
import { NavLink } from "react-router-dom";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
// import SimilarProjects from "./../Elements/SimilarProjects";
import Banner from "./../Elements/Banner";
// import image from "./../../images/projects/portrait/pic1.jpg";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { projects } from "../Elements/projectdata";
// import ModalVideo from "react-modal-video";
// import "../../../node_modules/react-modal-video/css/modal-video.min.css";

var bnrimg = require("./../../images/banner/1.jpg");

const ProjectDetail = ({
  match: {
    params: { id },
  },
}) => {
  var pageId = parseInt(id);
  // const [data, setData] = useState({
  //   date: "",
  //   client: "",
  //   project_type: "",
  //   location: "",
  // });

  if (pageId !== 0 && !pageId) {
    return <Redirect to={{ pathname: "/error" }} />;
  }

  const data = projects.find((project) => project.id === pageId);

  // projects.filter((project)=>(
  //   project.id === pageId ? (
  //     setData({ ...project })
  //   ) : <Redirect to={{ pathname: "/error" }} />
  // ))

  return (
    <>
      <Header />
      <div className="page-content">
        <Banner
          title="Helping you and your house become better acquainted."
          pagename="Project Detail"
          bgimage={bnrimg.default}
        />

        {/* SECTION CONTENT START */}

        <div className="section-full p-tb80 inner-page-padding">
          <div className="container">
            <div className="project-detail-outer">
              <div className="m-b0">
                <div className="row">
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img src={data.thumb1.default} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img src={data.thumb2.default} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="project-detail-pic m-b30">
                      <div className="mt-media">
                        <img src={data.thumb} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="m-b30">
                <div className="row">
                  <div className="col-md-4">
                    <div className="product-block">
                      <div className="row">
                        <div className="col-md-12 m-b10">
                          <h4 className="text-uppercase font-weight-600 m-b10">
                            Date
                          </h4>
                          <p>{data.date}</p>
                        </div>
                        <div className="col-md-12 m-b10">
                          <h4 className="text-uppercase font-weight-600 m-b10">
                            Client
                          </h4>
                          <p>{data.client}</p>
                        </div>
                        <div className="col-md-12 m-b10">
                          <h4 className="text-uppercase font-weight-600 m-b10">
                            Project type
                          </h4>
                          <p>{data.project_type}</p>
                        </div>
                        <div className="col-md-12 m-b10">
                          <h4 className="text-uppercase font-weight-600 m-b10">
                            Location
                          </h4>
                          <p>{data.location}</p>
                        </div>
                        <div className="col-md-12 m-b10">
                          <h4 className="text-uppercase font-weight-600 m-b10">
                            Year
                          </h4>
                          <p>{data.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="mt-box">
                      <div className="mt-thum-bx mt-img-effect yt-thum-box">
                        <img src={data.image.default} alt="" />
                        {/* <ModalVideo
                            channel="youtube"
                            isOpen={isOpen}
                            videoId="s3A7AK1K2hc"
                            onClose={() => setIsOpen(false)}
                          />
                          <NavLink
                            to={"#"}
                            className="play-now"
                            onClick={() => openModal}
                          >
                            <i className="icon fa fa-play" />
                            <span className="ripple" />
                          </NavLink> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-detail-containt">
                <div className="bg-white text-black">
                  <h3 className="font-weight-600">{data.title}</h3>
                  <p>{data.details}</p>

                  <div className="m-b0">
                    <div className="mt-divider divider-1px  bg-black">
                      <i className="icon-dot c-square" />
                    </div>
                  </div>
                  <ul className="social-icons social-square social-darkest m-b0">
                    <li>
                      <NavLink to={"#"} className="fa fa-facebook" />
                    </li>
                    <li>
                      <NavLink to={"#"} className="fa fa-twitter" />
                    </li>
                    <li>
                      <NavLink to={"#"} className="fa fa-linkedin" />
                    </li>
                    <li>
                      <NavLink to={"#"} className="fa fa-rss" />
                    </li>
                    <li>
                      <NavLink to={"#"} className="fa fa-youtube" />
                    </li>
                    <li>
                      <NavLink to={"#"} className="fa fa-instagram" />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="m-t50 text-center">
                <NavLink
                  to={`/project-grid`}
                  className="site-button btn-effect"
                >
                  Back
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION CONTENT END  */}
        {/* <SimilarProjects /> */}
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetail;
