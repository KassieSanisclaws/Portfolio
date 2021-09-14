import React, { useState } from "react";
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import './app.scss';
import Menu from './components/menu/Menu';
import AboutMe from "./components/aboutme/aboutme";
import Skills from "./components/Skills/skills";
import DesignUX from "./components/design-ux/designux";
import Education from "./components/Education/education";
import Portfolio from "./components/portfolio/portfolio";
import Remarks from "./components/remarks/remarks";
import ContactForm from "./components/contactForm/contactform";
import Footer from "./components/footer/footer";

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
      <Portfolio />
      <Remarks />
      <ContactForm />
      <div className="footer-section">
             <Footer />
      </div>
 
     
    </div>  
    </div>
  );
}

export default App;
