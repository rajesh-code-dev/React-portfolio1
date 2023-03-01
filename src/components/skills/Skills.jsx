import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <div id="skill" className='skill'>
        <h2 className='skill-h2'>Skills</h2>
        <div className="skills-list">
          <ul className="skill-list-left">
            <li className='skill-text'  >HTML</li>
            <li className='skill-text' >CSS</li>
            <li className='skill-text' >SCSS</li>
            <li className='skill-text' >javaScript (ES6+)</li>
            <li className='skill-text' >React</li>
            <li className='skill-text' >Responsive Design</li>
          </ul>
          <ul className="skill-list-right">
            <li className='skill-text' >Node.js</li>
            <li className='skill-text' >Express.js</li>
            <li className='skill-text' >MongoDB</li>
            <li className='skill-text' >Bootstrap</li>
            <li className='skill-text' >Style Components</li>
          </ul>
        </div>
      </div>
  )
}

export default Skills
