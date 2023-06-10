import React from 'react'
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import './contect.css'
const Contect = () => {
  return (
    <div id='contect' className='contect-css'>
      <h2 className="contect-h2">Get in touch</h2>
      <p>Feel free to send me an email any time, whether it is about work or a project or just to talk about web development. I'll get back to you as soon as possible.</p>
      <div className="contect-btn">
        <a href="mailto:choudharyrajesh729@gmail.com" className='btn-gm'>Say Hii</a>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/rajesh-chaudhary-031028236"><FaLinkedin></FaLinkedin></a>
        <a href="https://github.com/rajesh7688"><FaGithub></FaGithub></a>
        <a href="https://instagram.com/rajeshchoudhary7688"><FaInstagram></FaInstagram></a>
      </div>
    </div>
  )
}

export default Contect
