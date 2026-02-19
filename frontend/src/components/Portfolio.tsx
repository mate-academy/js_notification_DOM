import React, { useState } from 'react';
import '../App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
}

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects] = useState<Project[]>([
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      description: 'Повнофункціональний інтернет-магазин з оплатою та адмінкою. Включає в себе керування товарами, кошик, оформлення замовлення та інтеграцію з платіжними системами.', 
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'], 
      image: '/images/cat-ecommerce.jpg' 
    },
    { 
      id: 2, 
      title: 'AI Dashboard', 
      description: 'Аналітична панель з інтеграцією штучного інтелекту для аналізу даних в реальному часі. Використовує машинне навчання для прогнозування трендів.', 
      tech: ['Python', 'FastAPI', 'Vue.js', 'TensorFlow'], 
      image: '/images/cat-ai.jpg' 
    },
    { 
      id: 3, 
      title: 'Crypto Wallet App', 
      description: 'Мобільний додаток для безпечного керування криптоактивами. Підтримує різні блокчейни, перекази та перегляд історії транзакцій.', 
      tech: ['React Native', 'TypeScript', 'Web3', 'Blockchain'], 
      image: '/images/cat-crypto.jpg' 
    }
  ]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="container">
        <h2 className="section-title">Вибрані Роботи</h2>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card" onClick={() => openProject(project)}>
              <div className="portfolio-image" style={{ backgroundImage: `url(${project.image})` }} role="img" aria-label={project.title}>
                <div className="overlay">
                  <button className="view-btn">Детальніше</button>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
                <div className="tech-stack">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeProject}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeProject}>&times;</button>
            <div className="modal-image" style={{ backgroundImage: `url(${selectedProject.image})` }} role="img" aria-label={selectedProject.title}></div>
            <div className="modal-body">
              <h3 className="modal-title">{selectedProject.title}</h3>
              <div className="modal-tech-stack">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-actions">
                <a href="https://github.com/Mishadoloh" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub Repo</a>
                <a href="#" className="btn btn-outline">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
