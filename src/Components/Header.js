import "./Home.css";
import profileimg from "../Assets/Images/dp-profile.jpg";
import { useRef, useEffect, useState } from "react";
const Header = () => {
  const btnRef = useRef(null);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      btnRef.current.parentNode.classList.add("mobile-nav-active");
    } else {
      btnRef.current.parentNode.classList.remove("mobile-nav-active");
    }
  }, [click]);
  return (
    <>
      <i
        ref={btnRef}
        className={
          click
            ? "bi bi-list mobile-nav-toggle d-xl-none bi-x"
            : "bi bi-list mobile-nav-toggle d-xl-none bi-list"
        }
        onClick={() => setClick(!click)}
      ></i>

      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={profileimg} alt="" className="img-fluid rounded-circle" />
            
            <h1 className="text-light">
              <a href="index.html">Devaprasad</a>
            </h1>
           
            <div className="social-links mt-3 text-center">
              <a href="https://twitter.com/n_devaprasad" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="tel:8547198697" className="facebook">
                <i className="bx bxl-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/devaprasadmohanan/"
                className="instagram"
              >
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="https://github.com/devaprasadnm" className="google-plus">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/devaprasad-n-m-3a6b15197/"
                className="linkedin"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li>
                <a href="/" className="nav-link scrollto active">
                  <i className="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/#about" className="nav-link scrollto">
                  <i className="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="/#resume" className="nav-link scrollto">
                  <i className="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="nav-link scrollto">
                  <i className="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              {/* <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
        <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li> */}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
