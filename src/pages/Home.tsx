import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <h2>Technical Skills</h2>
            <p>Technologies I work with to create exceptional digital experiences</p>
          </div>
          
          <div className="grid grid-4">
            {[
              { name: 'AI/ML', icon: '🤖', skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'] },
              { name: 'Frontend', icon: '🎨', skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
              { name: 'Backend', icon: '⚙️', skills: ['Node.js', 'Python', 'Express', 'Django'] },
              { name: 'Database & Tools', icon: '🛠️', skills: ['MongoDB', 'MySQL', 'Git', 'Docker'] }
            ].map((category, index) => (
              <div key={category.name} className={`card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div style={{ 
                  fontSize: '2.5rem',
                  textAlign: 'center',
                  marginBottom: '1rem'
                }}>
                  {category.icon}
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  {category.name}
                </h3>
                <div className="skill-list">
                  {category.skills.map(skill => (
                    <span key={skill} className="skill-item">
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
            {[
              {
                title: 'AI Student Performance Predictor',
                description: 'Machine learning model to predict student academic performance using data analysis',
                tech: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
                image: '🤖'
              },
              {
                title: 'Smart IoT Home Automation',
                description: 'Arduino-based home automation with sensor integration and mobile control',
                tech: ['Arduino', 'Raspberry Pi', 'Node.js', 'React'],
                image: '🏠'
              },
              {
                title: 'Computer Vision Object Detection',
                description: 'Real-time object detection using deep learning and computer vision',
                tech: ['Python', 'TensorFlow', 'OpenCV', 'YOLO'],
                image: '👁️'
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