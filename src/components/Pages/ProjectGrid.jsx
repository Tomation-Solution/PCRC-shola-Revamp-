import {useEffect} from 'react'
import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import {projects} from '../Elements/projectdata'
// import ProjectDetail from './ProjectDetail';

var bnrimg = require('./../../images/banner/1.jpg');

const filters = [
    { label: "Construction", filter: ".cat-1" },
    { label: "Renovation", filter: ".cat-2" },
    { label: "Outdoor", filter: ".cat-3" },
    { label: "Interiors", filter: ".cat-4" },
    { label: "Consulting", filter: ".cat-5" },
    
];

const ProjectGrid = () => {
    

   useEffect(()=>{
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
   },[])
    
    
        return (
          <>
            <Header />
            <div className="page-content">
              <Banner
                title="Always dedicated and devoted"
                pagename="Project Grid"
                bgimage={bnrimg.default}
              />

              {/* SECTION CONTENT START */}
              <div className="section-full p-tb80 inner-page-padding">
                <div className="container">
                  {/* PAGINATION START */}
                  <div className="filter-wrap p-b30 text-center">
                    <ul className="filter-navigation inline-navigation masonry-filter link-style  text-uppercase">
                      <li className="active">
                        <NavLink to={"#"} data-filter="*" data-hover="All">
                          All
                        </NavLink>
                      </li>
                      {filters.map((item, index) => (
                        <li key={index}>
                          <NavLink
                            to={"#"}
                            data-filter={item.filter}
                            data-hover={item.label}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* PAGINATION END */}

                  {/* GALLERY CONTENT START */}
                  <div className="portfolio-wrap mfp-gallery work-grid row clearfix">
                    {projects.map((item, index) => (
                      <div
                        key={index}
                        className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}
                      >
                        <div className="image-effect-two hover-shadow">
                          <img src={item.thumb.default} alt="" />
                          <div className="figcaption">
                            <h4 className="mt-tilte">{item.title}</h4>
                            <p>{item.description}</p>
                            <NavLink
                              to={`/project-detail/${item.id}`}
                              className="read-more site-button btn-effect"
                            >
                              Read More
                            </NavLink>
                            <a className="mfp-link" href={item.image.default}>
                              <i className="fa fa-arrows-alt" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* GALLERY CONTENT END */}

                  <div className="m-t50 text-center">
                    <NavLink to={"#"} className="site-button btn-effect">
                      Load More
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* SECTION CONTENT END  */}
            </div>

            <Footer />
          </>
        );
    
};

export default ProjectGrid;