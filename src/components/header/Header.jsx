import { useRef } from 'react';
import './header.css'
import { FaBars, FaTimes } from "react-icons/fa";
const Header = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <div className='navbarContainer'>
      <div className="wrap " >
        <button className='nav-btn right'onClick={showNavBar} >
          <FaBars/>
        </button>
      </div>
      <div className='navbar'>
        <nav className="cont" ref={navRef}>
          <ul className='link'>
            <a className='nav-text' ref={navRef} href="#about">About</a>
            <a className='nav-text' href="#skill">Skill</a>
            <a className='nav-text' href="#projects">Project</a>
            <a className='nav-text' href="#contect">Contact</a>
            <button className='nav-btn close-nav-btn' onClick={showNavBar}>
              <FaTimes />
            </button>
          </ul>
        </nav>
      </div>

    </div>
  )
}

export default Header
