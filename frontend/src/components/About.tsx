import React from 'react';
import '../App.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
           <div className="about-text">
              <h2 className="section-title">Про Мене</h2>
              <p>
                Я захоплений Full Stack розробник з 2 роками досвіду у створенні сучасних веб-додатків.
                Моя подорож почалася з цікавості до того, як працює веб, і переросла в кар'єру,
                де я вирішую складні завдання за допомогою чистого та ефективного коду.
              </p>
              <p>
                Коли я не пишу код, ви можете знайти мене за вивченням нових технологій, участю в open source проектах
                або розробкою інтерфейсів, які приносять задоволення користувачам.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">2+</span>
                  <span className="stat-label">Роки Досвіду</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6+</span>
                  <span className="stat-label">Проектів</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Клієнтів</span>
                </div>
              </div>
           </div>
           <div className="about-image">
              <img src="/images/cat-about.jpg" alt="Mykhailo Profile" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;
