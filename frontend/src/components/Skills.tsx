import React, { useEffect, useState } from 'react';
import '../App.css';

interface Skill {
  id: number;
  name: string;
  level: number;
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Технічні Навички</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="progress-bar-bg">
                <div 
                  className="progress-bar-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
