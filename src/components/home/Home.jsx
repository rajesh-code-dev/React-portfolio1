import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./home.css";
import img from "../home/img1.jpeg";
import Header from "../header/Header";
import { ContactForm } from "../component";
const Home = ({ setScale }) => {
  const [txtTransform, setTxtTransform] = useState();
  window.addEventListener("load", (event) => {
    setTxtTransform("0");
  });

  localStorage.setItem("txtAnimate", txtTransform);

  const scaleCircle = () => {
    setScale("30");
  };

  const showForm = () => {};

  useEffect(() => {
    setTxtTransform("0");
  }, []);

  useEffect(() => {
    // Apply transition property after a delay
    setTimeout(() => {
      setTxtTransform("1");
    }, 100);
  }, []);

  return (
    <>
      <div className="container">
        {/* <Header /> */}
        <div className="home" id="home1">
          <div className="home-text">
            <div className="bounding">
              <h1
                className={`home-text-h1`}
                style={{
                  transform: `translateY(${txtTransform})`,
                  transition: "1s",
                }}
              >
                Hi, I'm{" "}
              </h1>
            </div>
            <div className="bounding">
              <h1
                className="home-text1-h1"
                style={{
                  transform: `translateY(${txtTransform})`,
                  transition: "1s",
                  transitionDelay: ".5s",
                }}
              >
                Rajesh.
              </h1>
            </div>
            <div className="animate">
              <p
                className="endtxt"
                style={{
                  transform: `translateY(${txtTransform})`,
                  transition: "1s",
                  transitionDelay: ".8s",
                }}
              >
                I build amazing things for the web.
              </p>
            </div>
            <ContactForm />

            {/* <div className="home-btn" >
            <a href="#contect" className='btn-text'>Contact me.</a>
          </div> */}
          </div>
          {/* <div className="homeFooter">
            <p className="homeFooterText">
              I am a web developer specializing in Front-End development. A MERN
              Stack enthusiast, JavaScript lover.
            </p>
            <p className="homeFooterText">
              I am a web developer specializing in Front-End development. A MERN
              Stack enthusiast, JavaScript lover.
            </p>
            <p className="homeFooterText">
              I am a web developer specializing in Front-End development. A MERN
              Stack enthusiast, JavaScript lover.
            </p>
          </div> */}
          <div className="svg-box">
            <div className="svg-container">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="
       M 100, 100
        m 75, 0
        a 75,75 0 1,1 -150,0
        a 75,75 0 1,1 150,0"
                  id="path-circle"
                  fill="none"
                />
                <text>
                  <textPath href="#path-circle" fill="white">
                    RAJESH REACT DEVELOPER || JAVASCRIPT LOVER
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          <div
            className="arrow"
            onClick={() => showForm()}
            onMouseOver={() => scaleCircle()}
            onMouseOut={() => setScale("1")}
          >
            <div>Contact Me.</div>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <div className='home-img'>
          <img src={img} alt="" />
        </div> */
}
export default Home;
