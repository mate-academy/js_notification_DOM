
exports.getHome = (req, res) => {
  res.send('Welcome to the Sawmill API');
};

exports.getServices = (req, res) => {
  const services = [
    { id: 1, title: 'Бізнес-консалтинг', description: 'Стратегічне планування та оптимізація процесів.' },
    { id: 2, title: 'Маркетинговий аналіз', description: 'Дослідження ринку та конкурентів.' },
    { id: 3, title: 'IT-аудит', description: 'Оцінка технічної інфраструктури та безпеки.' }
  ];
  res.json(services);
};

exports.getProjects = (req, res) => {
  const projects = [
    { 
      id: 1, 
      title: 'E-Commerce Platform', 
      description: 'Повнофункціональний інтернет-магазин з оплатою та адмінкою.', 
      tech: ['React', 'Node.js', 'MongoDB'], 
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 2, 
      title: 'AI Dashboard', 
      description: 'Аналітична панель з інтеграцією штучного інтелекту.', 
      tech: ['Python', 'FastAPI', 'Vue.js'], 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' 
    },
    { 
      id: 3, 
      title: 'Crypto Wallet App', 
      description: 'Мобільний додаток для керування криптоактивами.', 
      tech: ['React Native', 'TypeScript', 'Web3'], 
      image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=800' 
    }
  ];
  res.json(projects);
};

exports.getSkills = (req, res) => {
  const skills = [
    { id: 1, name: 'JavaScript / TypeScript', level: 95 },
    { id: 2, name: 'React / Next.js', level: 90 },
    { id: 3, name: 'Node.js / Express', level: 85 },
    { id: 4, name: 'UI/UX Design', level: 80 },
    { id: 5, name: 'DevOps (Docker, AWS)', level: 75 }
  ];
  res.json(skills);
};
