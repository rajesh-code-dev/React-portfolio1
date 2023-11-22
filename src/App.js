import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigation } from "react-router-dom";
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
  Circle1,
  ContactForm,
} from "./components/component";

// import { createContext } from 'react';
import ReactSwitch from "react-switch";
export const ThemeContext = createContext(null);

function App() {
  const [theme, newTheme] = useState("light");
  const [scale, setScale] = useState("1");

  const toggleTheme = () => {
    newTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

{
  /* <div
className="App"
id={theme}
style={{ color: "#fff", background: "#000" }}
>
<Circle scale={scale} />
<Header></Header>
<div className="navbar-theme">
</div>
<main className="main" style={{ color: "#fff" }}>
  <Home setScale={setScale}></Home>
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
</div> */
}
