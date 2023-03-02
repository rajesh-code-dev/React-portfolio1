import React from 'react'
import {FaArrowUp} from "react-icons/fa";
import './home.css'
import img from '../home/img1.jpeg';
const Home = () => {
  return (
    <>
      <div className="home" id='home1'>
        <div className="home-text">
          <h1 className='home-text-h1'>Hi, I'am Rajesh.</h1>
          <h3 className='home-text-h3'>I build amazing things for the web.</h3>
          <p >I am a web developer specializing in Front-End development. A MERN Stack enthusiast, JavaScript lover.</p>
          <div className="home-btn" >
            <a href="#contect" className='btn-text'>Contact me.</a>
          </div>
        </div>
        <div className='home-img'>
          <img src={img} alt="" />
        </div>
      </div>
      <div className="arrow">
        <FaArrowUp></FaArrowUp>
      </div>
    </>
  )
}

export default Home
