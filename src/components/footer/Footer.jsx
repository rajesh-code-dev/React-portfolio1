import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-title">
          <h3>Rajesh</h3>
          <p>I'am web developer</p>
        </div>

        <ul className="project-link">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#skill">Skill</a></li>
        </ul>
        <div className="footer-social-link">
          <a href="https://github.com/rajesh7688"><FaLinkedin></FaLinkedin></a>
          <a href="https://github.com/rajesh7688"><FaGithub></FaGithub></a>
          <a href="https://instagram.com/rajeshchoudhary7688"><FaInstagram></FaInstagram></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
