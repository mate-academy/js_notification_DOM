import React, { useState } from 'react';
import '../App.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>MD<span>.</span></h1>
        </div>
        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen((prev) => !prev)} type="button" aria-label="Відкрити меню">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#hero" onClick={handleLinkClick}>Головна</a></li>
            <li><a href="#about" onClick={handleLinkClick}>Про мене</a></li>
            <li><a href="#skills" onClick={handleLinkClick}>Навички</a></li>
            <li><a href="#portfolio" onClick={handleLinkClick}>Роботи</a></li>
            <li><a href="#contact" className="cta-link" onClick={handleLinkClick}>Зв'язатись</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
