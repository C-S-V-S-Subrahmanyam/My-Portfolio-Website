import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [skillFilter, setSkillFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.filter-dropdown')) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  const skillCategories = [
    { 
      name: 'Programming Languages', 
      icon: '💻', 
      skills: ['C', 'C++', 'Java', 'Python'],
      color: '#61dafb',
      type: 'technical'
    },
    { 
      name: 'Web Development', 
      icon: '🌐', 
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      color: '#f06529',
      type: 'technical'
    },
    { 
      name: 'Databases', 
      icon: '🗄️', 
      skills: ['SQL', 'MongoDB'],
      color: '#4db33d',
      type: 'technical'
    },
    { 
      name: 'Presentation Tools', 
      icon: '📊', 
      skills: ['PowerPoint', 'Power BI'],
      color: '#d83b01',
      type: 'tools'
    },
    { 
      name: 'Platforms & Frameworks', 
      icon: '☁️', 
      skills: ['Git', 'GitHub', 'IoT', 'IBM Cloud', 'Google Cloud', 'Salesforce CRM'],
      color: '#ff9900',
      type: 'platforms'
    },
    { 
      name: 'Technical Expertise', 
      icon: '🔧', 
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'OOP', 'Computer Networks', 'Linux', 'Software Engineering'],
      color: '#7b68ee',
      type: 'technical'
    },
    { 
      name: 'Soft Skills', 
      icon: '🤝', 
      skills: ['Teamwork', 'Time Management', 'Self-motivated', 'Communication'],
      color: '#ff6b6b',
      type: 'soft'
    },
    { 
      name: 'Languages Known', 
      icon: '🌍', 
      skills: ['Telugu', 'Hindi', 'English'],
      color: '#4ecdc4',
      type: 'languages'
    }
  ];

  const filteredSkills = skillFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.type === skillFilter);

  const filterOptions = [
    { value: 'all', label: 'All Skills', icon: '🎯' },
    { value: 'technical', label: 'Technical', icon: '💻' },
    { value: 'tools', label: 'Tools', icon: '🛠️' },
    { value: 'platforms', label: 'Platforms', icon: '☁️' },
    { value: 'soft', label: 'Soft Skills', icon: '🤝' },
    { value: 'languages', label: 'Languages', icon: '🌍' }
  ];

  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              color: 'white',
              border: '4px solid var(--accent-color)',
              boxShadow: 'var(--shadow-glow)'
            }}>
              {/* Replace this div with your actual profile image */}
              <img src="/images/profile-small.jpg" alt="Subrahmanyam" style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover'
              }} />
            </div>
            
            <h1 className="hero-title">
              Chinthalapati Sri Venkata Sai Subrahmanyam
            </h1>
            
            <h2 className="hero-subtitle">
              Computer Science Engineering Student | AI/ML Enthusiast | Full-Stack Developer
            </h2>
            
            <p className="hero-tagline">
              Passionate Computer Science Engineering student with expertise in AI/ML, 
              full-stack development, and IoT. I love solving complex problems 
              and building impactful digital solutions through innovative technology.
            </p>
            
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
              <button 
                className="btn btn-outline"
                onClick={() => {
                  // Replace with actual resume file path
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Subrahmanyam_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="hero-bg-elements">
          <div className="floating-element float" style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '60px',
            height: '60px',
            background: 'var(--gradient-primary)',
            borderRadius: '50%',
            opacity: '0.1',
            animationDelay: '0s'
          }}></div>
          <div className="floating-element float" style={{
            position: 'absolute',
            top: '60%',
            right: '15%',
            width: '80px',
            height: '80px',
            background: 'var(--gradient-secondary)',
            borderRadius: '50%',
            opacity: '0.1',
            animationDelay: '1s'
          }}></div>
          <div className="floating-element float" style={{
            position: 'absolute',
            bottom: '20%',
            left: '20%',
            width: '40px',
            height: '40px',
            background: 'var(--gradient-accent)',
            borderRadius: '50%',
            opacity: '0.1',
            animationDelay: '2s'
          }}></div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="slide-in-left">
              <h2>Welcome to My Portfolio</h2>
              <p>
                I'm a dedicated Computer Science Engineering student with a passion for 
                AI/ML, full-stack development, and IoT technologies. Currently pursuing 
                my degree while actively building innovative projects that combine 
                artificial intelligence with practical applications.
              </p>
              <ul style={{ 
                color: 'var(--secondary-text)', 
                marginLeft: '1.5rem',
                marginBottom: '2rem'
              }}>
                <li>🎓 Computer Science Engineering Student</li>
                <li>🤖 AI/ML and Data Science Enthusiast</li>
                <li>💻 Full-stack Development Experience</li>
                <li>� IoT and Hardware Integration</li>
                <li>🚀 Problem-solving and Innovation Focus</li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </div>
            
            <div className="slide-in-right">
              <div className="card" style={{ 
                textAlign: 'center',
                padding: '3rem 2rem'
              }}>
                <div style={{ 
                  fontSize: '4rem',
                  marginBottom: '1rem'
                }}>👨‍💻</div>
                <h3>Let's Build Something Amazing</h3>
                <p>
                  Ready to bring your ideas to life? I'm always excited to work 
                  on new projects and collaborate with like-minded individuals.
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="btn btn-outline">
                    Start a Conversation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section" style={{ 
        padding: '4rem 0',
        background: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <h2>Technical Skills</h2>
              <div style={{ 
                position: 'relative',
                display: 'inline-block'
              }} className="filter-dropdown">
                <button 
                  style={{
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.2rem'
                  }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  title="Filter Skills"
                >
                  🔍
                </button>
                
                {isFilterOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.5rem',
                    minWidth: '150px',
                    zIndex: 1000,
                    boxShadow: 'var(--shadow-medium)'
                  }}>
                    {filterOptions.map(option => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setSkillFilter(option.value);
                          setIsFilterOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          width: '100%',
                          padding: '0.5rem',
                          background: skillFilter === option.value ? 'var(--accent-color)20' : 'transparent',
                          border: 'none',
                          borderRadius: '4px',
                          color: skillFilter === option.value ? 'var(--accent-color)' : 'var(--secondary-text)',
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          if (skillFilter !== option.value) {
                            (e.target as HTMLButtonElement).style.background = 'var(--accent-color)10';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (skillFilter !== option.value) {
                            (e.target as HTMLButtonElement).style.background = 'transparent';
                          }
                        }}
                      >
                        <span>{option.icon}</span>
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <p>Comprehensive technical expertise across multiple domains - Use the filter to explore specific skill categories</p>
            {skillFilter !== 'all' && (
              <div style={{ 
                margin: '1rem 0',
                padding: '0.5rem 1rem',
                background: 'var(--accent-color)20',
                borderRadius: '20px',
                display: 'inline-block',
                color: 'var(--accent-color)',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Showing: {filterOptions.find(opt => opt.value === skillFilter)?.label} ({filteredSkills.length} categories)
              </div>
            )}
          </div>
          
          <div className="skills-grid" style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {filteredSkills.map((category, index) => (
              <div key={category.name} className={`skill-category card`} style={{
                padding: '1.5rem',
                borderLeft: `4px solid ${category.color}`,
                transition: 'all 0.3s ease',
                background: 'var(--card-bg)'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  gap: '0.5rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
                  <h3 style={{ 
                    margin: 0,
                    fontSize: '1.1rem',
                    color: category.color
                  }}>
                    {category.name}
                  </h3>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {category.skills.map(skill => (
                    <span 
                      key={skill} 
                      style={{
                        background: `${category.color}15`,
                        color: category.color,
                        padding: '0.3rem 0.8rem',
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        border: `1px solid ${category.color}30`,
                        transition: 'all 0.3s ease',
                        cursor: 'default'
                      }}
                      onMouseOver={(e) => {
                        const target = e.target as HTMLSpanElement;
                        target.style.background = `${category.color}25`;
                        target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseOut={(e) => {
                        const target = e.target as HTMLSpanElement;
                        target.style.background = `${category.color}15`;
                        target.style.transform = 'translateY(0)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Featured Projects</h2>
            <p>Some of my recent work that I'm proud to showcase</p>
          </div>
          
          <div className="grid grid-3">
            {projectsData.projects
              .filter(project => project.featured)
              .slice(0, 3)
              .map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
              {
                title: 'EverCare Healthcare App',
                description: 'Android healthcare application with appointment booking, health records, and medication reminders',
                tech: ['Java', 'Android Studio', 'XML', 'Mobile Dev'],
                image: '�'
              },
              {
                title: 'IoT Food Spoilage Detection',
                description: 'IoT-based solution detecting food spoilage using gas sensors with mobile alerts interface',
                tech: ['IoT', 'Embedded Sensors', 'Mobile Interface', 'Hardware'],
                image: '🌡️'
              }
            ].map((project, index) => (
              <div key={project.title} className="project-card fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div className="project-image">
                  <div style={{ fontSize: '3rem' }}>{project.image}</div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{
        padding: '6rem 0',
        background: 'var(--secondary-bg)',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Ready to Work Together?</h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" className="btn btn-primary">
              Get In Touch
            </Link>
            <a 
              href="mailto:subrahmanyamchintalapati@gmail.com" 
              className="btn btn-outline"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;