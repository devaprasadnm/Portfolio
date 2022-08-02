import "./Home.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import {UserContext} from "../App.js";

import p1_1 from "../Assets/Images/p1.1.jpg";
import p2_1 from "../Assets/Images/p2.1.jpg";




const Portfolio = () => {
 
    const { setState} = useContext(UserContext);

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p></p>
          </div>

          {/* <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div> */}

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src={p1_1} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-1.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="App 1"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link
                    to="project"
                    title="More Details"
                    onClick={() => setState(1)}
                  >
                    <i className="bx bx-link"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src={p2_1} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <a
                    href="assets/img/portfolio/portfolio-2.jpg"
                    data-gallery="portfolioGallery"
                    className="portfolio-lightbox"
                    title="Web 3"
                  >
                    <i className="bx bx-plus"></i>
                  </a>
                  <Link
                    to="project"
                    title="More Details"
                    onClick={() => setState(2)}>
                       <i className="bx bx-link"></i>  
                  </Link>
                </div>
              </div>
            </div>

       
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
