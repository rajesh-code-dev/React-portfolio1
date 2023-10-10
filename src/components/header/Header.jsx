import { useRef, useState } from "react";
import "./header.css";
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [txtTransform, setTxtTransform] = useState();
  window.addEventListener("load", () => {
    const txtAnimate = localStorage.getItem("txtAnimate");
    setTxtTransform(txtAnimate);
  });

  return (
    <div className="navbarContainer">
      <div className="wrap ">
        <button className="nav-btn right" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
      <div className="navbar">
        <div className="bounding">
          <h5
            className="boundingtxt"
            style={{
              transform: `translateY(${txtTransform})`,
              transition: "1s",
            }}
          >
            MODERN WEB
          </h5>
        </div>
        <nav className="cont" ref={navRef}>
          <ul className="link">
            <div className="bounding1">
              <a className="nav-text boundingtxt" ref={navRef} href="#about">
                About
              </a>
            </div>
            <div className="bounding1">
              <a className="nav-text boundingtxt" href="#skill">
                Skill
              </a>
            </div>
            <div className="bounding1">
              <a className="nav-text boundingtxt" href="#projects">
                Project
              </a>
            </div>
            <div className="bounding1">
              <a className="nav-text boundingtxt" href="#contect">
                Contact
              </a>
            </div>
            <button className="nav-btn close-nav-btn" onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
