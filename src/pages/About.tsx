import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => {
  const skills = {
    'AI/ML & Data Science': [
      'Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib',
      'Machine Learning', 'Deep Learning', 'Data Analysis', 'Computer Vision'
    ],
    'Frontend Development': [
      'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Responsive Design',
      'DOM Manipulation', 'AJAX', 'jQuery', 'UI/UX Design'
    ],
    'Backend Development': [
      'Node.js', 'Express.js', 'Python', 'Django', 'RESTful APIs',
      'Server-side Development', 'API Integration', 'Authentication'
    ],
    'Database & Tools': [
      'MongoDB', 'MySQL', 'Git & GitHub', 'Docker', 'Linux',
      'VS Code', 'Database Design', 'Version Control', 'Agile Methodology'
    ],
    'IoT & Hardware': [
      'Arduino', 'Raspberry Pi', 'Sensor Integration', 'Hardware Programming',
      'Embedded Systems', 'IoT Protocols', 'Circuit Design'
    ]
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Gayatri Vidya Parishad College of Engineering',
      period: '2022 - 2026 (Expected)',
      gpa: 'Current CGPA: 8.5/10',
      description: 'Specializing in AI/ML, Data Science, and Full-stack Development. Active in technical projects and coding competitions.'
    },
    {
      degree: 'Intermediate (12th Grade)',
      institution: 'Sri Chaitanya Junior College',
      period: '2020 - 2022',
      gpa: 'Percentage: 95.8%',
      description: 'Mathematics, Physics, Chemistry (MPC) stream with excellent academic performance.'
    },
    {
      degree: 'Secondary School Certificate (10th Grade)',
      institution: 'Bhashyam Public School',
      period: '2019 - 2020',
      gpa: 'CGPA: 10/10',
      description: 'Achieved perfect score with strong foundation in mathematics and science subjects.'
    }
  ];

  const experiences = [
    {
      title: 'AI/ML Research Student',
      company: 'GVPCE Research Lab',
      period: '2023 - Present',
      type: 'Research',
      description: [
        'Working on machine learning projects focused on computer vision and data analysis',
        'Developing AI models using Python, TensorFlow, and Scikit-learn',
        'Collaborating with faculty on research papers and technical documentation',
        'Participating in national-level technical competitions and hackathons'
      ]
    },
    {
      title: 'Full-Stack Development Projects',
      company: 'Personal & Academic Projects',
      period: '2022 - Present',
      type: 'Project Work',
      description: [
        'Built multiple web applications using React.js, Node.js, and MongoDB',
        'Developed IoT-based smart systems using Arduino and Raspberry Pi',
        'Created data visualization dashboards for academic research projects',
        'Implemented RESTful APIs and database management systems'
      ]
    },
    {
      title: 'Technical Team Member',
      company: 'College Technical Club',
      period: '2022 - Present',
      type: 'Extracurricular',
      description: [
        'Active member of college coding club and technical societies',
        'Organized coding workshops and technical events for students',
        'Mentored junior students in programming and project development',
        'Participated in inter-college programming competitions'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Consistent high academic performance with 8.5+ CGPA in Computer Science Engineering',
      year: '2022-Present'
    },
    {
      title: 'Perfect Score Achievement',
      description: 'Achieved 10/10 CGPA in 10th grade and 95.8% in 12th grade',
      year: '2020-2022'
    },
    {
      title: 'Technical Project Innovation',
      description: 'Developed multiple AI/ML and IoT projects showcasing practical application of technology',
      year: '2023-2024'
    },
    {
      title: 'Programming Competitions',
      description: 'Active participant in coding competitions and technical events at college and national level',
      year: '2022-Present'
    },
    {
      title: 'Research Contributions',
      description: 'Contributing to research projects in AI/ML domain with focus on real-world applications',
      year: '2023-Present'
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-title">
        <div className="container">
          <h1>About Me</h1>
          <p>
            Learn more about my journey, skills, and passion for creating 
            innovative web solutions
          </p>
        </div>
      </section>

      {/* Career Objective */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="slide-in-left">
              <h2>Career Objective</h2>
              <p>
                As a passionate full-stack developer, I strive to create innovative and 
                user-centric web applications that solve real-world problems. My goal is 
                to continuously learn and adapt to emerging technologies while delivering 
                high-quality, scalable solutions.
              </p>
              <p>
                I believe in the power of clean code, collaborative teamwork, and 
                user-focused design. I'm always eager to take on new challenges and 
                contribute to projects that make a positive impact on users' lives.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      3+
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Years Experience</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      15+
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Projects Completed</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      100%
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                {/* Profile Image Placeholder */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '20px',
                  background: 'var(--gradient-primary)',
                  margin: '0 auto 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: 'white',
                  border: '4px solid var(--accent-color)',
                  boxShadow: 'var(--shadow-glow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Replace this div with your actual profile image */}
                  <img src="/images/profile-large.jpg" alt="John Doe - Full Stack Developer" style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    objectFit: 'cover'
                  }} />
                  {/* Optional: Add a subtle overlay for better text contrast */}
                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                    padding: '1rem 0.5rem 0.5rem',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}>
                    {/* Uncomment when you add your photo */}
                    {/* John Doe */}
                  </div>
                </div>
                
                <h3>Mission Statement</h3>
                <p>
                  "To leverage technology in creating meaningful digital experiences 
                  that bridge the gap between complex problems and elegant solutions."
                </p>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-around',
                  marginTop: '2rem',
                  fontSize: '2rem'
                }}>
                  <span title="Innovation">💡</span>
                  <span title="Quality">⭐</span>
                  <span title="Collaboration">🤝</span>
                  <span title="Growth">📈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Technical Skills</h2>
            <p>Technologies and tools I use to bring ideas to life</p>
          </div>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={category} className={`skill-category fade-in`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <h4>{category}</h4>
                <div className="skill-list">
                  {skillList.map(skill => (
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

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Education</h2>
            <p>My academic journey and continuous learning path</p>
          </div>
          
          <div className="grid grid-2">
            {education.map((edu, index) => (
              <div key={edu.degree} className={`card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-text)' }}>
                    {edu.degree}
                  </h3>
                  <p style={{ 
                    color: 'var(--accent-color)', 
                    fontWeight: '500',
                    margin: 0
                  }}>
                    {edu.institution}
                  </p>
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ color: 'var(--muted-text)' }}>{edu.period}</span>
                  <span style={{ color: 'var(--success-color)' }}>{edu.gpa}</span>
                </div>
                <p style={{ color: 'var(--secondary-text)', margin: 0 }}>
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Professional Experience</h2>
            <p>My journey in the tech industry</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {experiences.map((exp, index) => (
              <div key={exp.title} className="card mb-4 fade-in" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}>
                  <div>
                    <h3 style={{ marginBottom: '0.25rem', color: 'var(--primary-text)' }}>
                      {exp.title}
                    </h3>
                    <p style={{ 
                      color: 'var(--accent-color)', 
                      fontWeight: '500',
                      margin: 0
                    }}>
                      {exp.company}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ 
                      color: 'var(--muted-text)', 
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>
                      {exp.period}
                    </p>
                    <span style={{ 
                      background: 'var(--accent-color)',
                      color: 'var(--primary-bg)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul style={{ 
                  color: 'var(--secondary-text)',
                  marginLeft: '1.5rem'
                }}>
                  {exp.description.map((desc, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Achievements & Recognition</h2>
            <p>Milestones and accomplishments in my career</p>
          </div>
          
          <div className="grid grid-2">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className={`card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '2rem',
                    minWidth: '60px'
                  }}>
                    🏆
                  </div>
                  <div>
                    <h4 style={{ 
                      color: 'var(--primary-text)',
                      marginBottom: '0.5rem'
                    }}>
                      {achievement.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--secondary-text)',
                      marginBottom: '0.5rem'
                    }}>
                      {achievement.description}
                    </p>
                    <span style={{ 
                      color: 'var(--accent-color)',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{
        background: 'var(--secondary-bg)',
        textAlign: 'center',
        padding: '6rem 0'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I'm always interested in discussing new opportunities, projects, or 
            just having a conversation about technology and development.
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" className="btn btn-primary">
              Get In Touch
            </a>
            <button 
              className="btn btn-outline"
              onClick={() => window.open('/resume.pdf', '_blank')}
              style={{ background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;