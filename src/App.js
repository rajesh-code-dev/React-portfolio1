import React, { createContext, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Contect from './components/contect/Contect';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Testimonials from './components/testimonials/Testimonials';
import Work from './components/work/Work';

// import { createContext } from 'react';
import ReactSwitch from 'react-switch';
export const ThemeContext = createContext(null)


function App() {
  const [theme, newTheme] = useState("light")
  const toggleTheme = () =>{
    newTheme((curr) =>(curr === 'light' ? 'dark': 'light'))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <Header></Header>
        <div className='navbar-theme'>
        <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/>
        </div>
        <main className='main'>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Services></Services>
          <Qualification></Qualification>
          <Work></Work>
          <Testimonials></Testimonials>
          <Contect></Contect>
        </main>
        
        <Footer></Footer>
        <Scrollup></Scrollup>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
