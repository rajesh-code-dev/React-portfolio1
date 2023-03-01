import React from 'react'
import './work.css';
import {FaGithub, FaArrowUp} from "react-icons/fa";
const work = () => {
  return (
    <div id='projects'>
      <h2 className='projects-h2'>Projects</h2>
      <div className="project-list">
        <div className="project-1">
          <h3 className="project-1-h3">Weather App</h3>
          <p className="project-1-p">Weather-App using open Weather API JavaScript, HTML, CSS This app also responsive fit in any device. Json used to get data from HTTP response then used for update html element. </p>
          <ul className="project-1-skill">
            <li className="project-1-skill-item">JavaScript</li>
            <li className="project-1-skill-item">HTML</li>
            <li className="project-1-skill-item">CSS</li>
            <li className="project-1-skill-item">Weather API</li>
          </ul>
          <div className="project-btns">
            <div className="project-live-btn">
              <a href="https://weather-app-by-rajesh.netlify.app">Live <FaArrowUp></FaArrowUp></a>
            </div>
            <div className="project-git">
              <a className='gitlink' href="https://github.com/rajesh7688/TicTacToe.git">GitHub <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-list">
        <div className="project-1">
          <h3 className="project-1-h3">Tic Tac Toe</h3>
          <p className="project-1-p">Made using JavaScript and Html, CSS. Users Can play and enjoy it easy to use and also have responsiveness. Users can play it any device. </p>
          <ul className="project-1-skill">
            <li className="project-1-skill-item">JavaScript</li>
            <li className="project-1-skill-item">HTML</li>
            <li className="project-1-skill-item">CSS</li>
            <li className="project-1-skill-item"></li>
          </ul>
          <div className="project-btns">
            <div className="project-live-btn">
              <a href="https://tiktactoe-rajesh.netlify.app">Live <FaArrowUp></FaArrowUp></a>
            </div>
            <div className="project-git">
              <a className='gitlink' href="https://github.com/rajesh7688/TicTacToe.git">GitHub <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
      </div>
      <div className="project-list">
        <div className="project-1">
          <h3 className="project-1-h3">JavaSript Calculator</h3>
          <p className="project-1-p">Made using JavaScript, Html, CSS for simple mathematical calculation.</p>
          <ul className="project-1-skill">
            <li className="project-1-skill-item">JavaScript</li>
            <li className="project-1-skill-item">HTML</li>
            <li className="project-1-skill-item">CSS</li>
            <li className="project-1-skill-item"></li>
          </ul>
          <div className="project-btns">
            <div className="project-live-btn">
              <a className='link' href="https://calculator-javascript-rajesh.netlify.app">Live <FaArrowUp></FaArrowUp></a>
            </div>
            <div className="project-git">
              <a className='gitlink' href="https://github.com/rajesh7688/javaScript-calculator.git">GitHub <FaGithub></FaGithub></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default work
