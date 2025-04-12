import React, { useState, useEffect } from 'react';
import "./Navbar.css";


const texts = {
  eng: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    langBtn: "GEO"
  },
  geo: {
    home: "მთავარი",
    about: "შესახებ",
    projects: "პროექტები", 
    contact: "კონტაქტი",
    langBtn: "ENG"
  }
};

const Navbar = () => {
  const [language, setLanguage] = useState('eng');

  useEffect(() => {
    const savedLang = localStorage.getItem('lang') || 'eng';
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLang = () => {
    setLanguage(prev => prev === 'eng' ? 'geo' : 'eng');
  };

  const t = texts[language];

  return (
   
    <div>
      
      <program />
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#home" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
          }}>{t.home}</a></li>
          <li><a href="#about" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}>{t.about}</a></li>
          <li><a href="#projects" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>{t.projects}</a></li>
          <li><a href="#contact" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>{t.contact}</a></li>
        </ul>
        
        <button onClick={toggleLang} className="lang-btn">
          {t.langBtn}
        </button>
        

      </nav>
      
    </div>
    
  );
};

export default Navbar;
