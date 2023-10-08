import React, { createContext, useState } from "react";
import "./App.css";
import {
  Header,
  Home,
  About,
  Skills,
  Services,
  Qualification,
  Work,
  Testimonials,
  Contect,
  Footer,
  Scrollup,
  Circle,
  Circle1
} from "./components/component";

// import { createContext } from 'react';
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

function App() {
  const [theme, newTheme] = useState("light");
  const toggleTheme = () => {
    newTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    // <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
      <div className="App" id={theme} style={{color: '#fff', background: '#000'}}>
      {/* <Circle1/> */}
      <Circle />
        <Header></Header>
        <div className="navbar-theme">
          {/* <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} /> */}
        </div>
        <main className="main" style={{color: '#fff'}}>
          <Home></Home>
          {/* <About></About>
          <Skills></Skills>
          <Services></Services>
          <Qualification></Qualification>
          <Work></Work>
          <Testimonials></Testimonials>
          <Contect></Contect> */}
        </main>

        <Footer></Footer>
        <Scrollup></Scrollup>
      </div>
    // </ThemeContext.Provider>
  );
}

export default App;
