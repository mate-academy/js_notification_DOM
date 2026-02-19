import React from 'react';
import '../App.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <span className="greeting">Привіт, я</span>
        <h1 className="name">Михайло</h1>
        <h2 className="title">Креативний Розробник & Дизайнер</h2>
        <p className="description">
          Я створюю цифрові продукти, що поєднують дизайн, технології та інновації.
          Перегляньте мій код на GitHub @Mishadoloh.
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">Мої Роботи</a>
          <a href="#contact" className="btn btn-outline">Контакти</a>
        </div>
      </div>
      <div className="hero-visual">
         <div className="profile-image-container">
            <img src="/images/cat-hero.jpg" alt="Михайло" className="hero-profile-img" />
         </div>
      </div>
    </section>
  );
};

export default Hero;
