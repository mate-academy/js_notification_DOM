import React from 'react';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <h2>Давайте працювати разом.</h2>
          <a href="mailto:dologmihajlo31@gmail.com" className="email-link">dologmihajlo31@gmail.com</a>
        </div>
        
        <div className="social-links">
          <a href="https://github.com/Mishadoloh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Михайло Долог. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
