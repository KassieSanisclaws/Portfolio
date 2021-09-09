import React, { useState } from "react";
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import './app.scss';
import Menu from './components/menu/Menu';
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/Skills/skills";
import DesignUX from "./components/design-ux/designux";
import Education from "./components/Education/education";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("intro")

    return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  setMenuItem={setMenuItem} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuItem={menuItem} setMenuItem={setMenuItem}/>
    <div className="sections">
      <Intro />

      <AboutMe />
      <Skills />
      <Education />
      <DesignUX />
      {/* <Portfolio />
      <Remarks />
      <ContactForm /> */}
     
    </div>  
    </div>
  );
}

export default App;
