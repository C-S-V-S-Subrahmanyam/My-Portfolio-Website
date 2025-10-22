import React from 'react';
import Layout from '../components/Layout';
import Icon from '../components/Icon';

const About: React.FC = () => {
  const skillCategories = [
    { 
      name: 'Programming Languages', 
      icon: 'code', 
      skills: ['Python', 'Java', 'C', 'JavaScript', 'HTML', 'CSS'],
      color: '#4285f4',
      type: 'technical'
    },
    { 
      name: 'Web Development', 
      icon: 'globe', 
      skills: ['React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Responsive Design'],
      color: '#61dafb',
      type: 'technical'
    },
    { 
      name: 'AI/ML & Data Science', 
      icon: 'brain', 
      skills: ['Machine Learning', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy', 'Data Analysis'],
      color: '#ff6f00',
      type: 'technical'
    },
    { 
      name: 'Databases', 
      icon: 'database', 
      skills: ['SQL', 'MongoDB'],
      color: '#4db33d',
      type: 'technical'
    },
    { 
      name: 'Presentation Tools', 
      icon: 'chart', 
      skills: ['PowerPoint', 'Power BI'],
      color: '#d83b01',
      type: 'tools'
    },
    { 
      name: 'Platforms & Frameworks', 
      icon: 'cloud', 
      skills: ['Git', 'GitHub', 'IoT', 'IBM Cloud', 'Google Cloud', 'Salesforce CRM'],
      color: '#ff9900',
      type: 'platforms'
    },
    { 
      name: 'Technical Expertise', 
      icon: 'tools', 
      skills: ['Data Structures & Algorithms', 'Problem Solving', 'OOP', 'Computer Networks', 'Linux', 'Software Engineering'],
      color: '#7b68ee',
      type: 'technical'
    },
    { 
      name: 'Soft Skills', 
      icon: 'users', 
      skills: ['Teamwork', 'Time Management', 'Self-motivated', 'Communication'],
      color: '#ff6b6b',
      type: 'soft'
    },
    { 
      name: 'Languages Known', 
      icon: 'globe', 
      skills: ['Telugu', 'Hindi', 'English'],
      color: '#4ecdc4',
      type: 'languages'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'CSE',
      institution: 'Prasad V. Potluri Siddhartha Institute of Technology',
      period: '2022-2026',
      gpa: '8.87 CGPA',
      description: 'Pursuing Computer Science Engineering with focus on AI/ML, Full-stack Development, and IoT. Active in technical projects and coding competitions.'
    },
    {
      degree: 'Intermediate',
      field: 'MPC',
      institution: 'Sri Chaitanya Junior College',
      period: '2020–2022',
      gpa: '96.8%',
      description: 'Mathematics, Physics, Chemistry (MPC) stream with excellent academic performance.'
    },
    {
      degree: '10th Class',
      field: '',
      institution: 'Model Mission High School',
      period: '2020',
      gpa: '9.8 CGPA',
      description: 'Achieved excellent score with strong foundation in mathematics and science subjects.'
    }
  ];

  const experiences = [
    {
      title: 'Cybersecurity Virtual Internship',
      company: 'Palo Alto Company (Eduskills Platform)',
      period: 'Jan 2024– Mar 2024',
      type: 'Virtual Internship',
      description: [
        'Gained hands-on experience simulating real-world tasks such as configuring security rules and analyzing cyber threats.'
      ]
    },
    {
      title: 'Android Developer Virtual Internship',
      company: 'Google (Eduskills Platform)',
      period: 'Apr 2024– Jun 2024',
      type: 'Virtual Internship',
      description: [
        'Developed core concepts like activity lifecycle, layout design, and connecting apps to data sources using APIs.'
      ]
    },
    {
      title: 'AI-ML Virtual Internship',
      company: 'Google (Eduskills Platform)',
      period: 'Oct 2024– Dec 2024',
      type: 'Virtual Internship',
      description: [
        'Explored core machine learning concepts and implemented models using Python, focusing on real-world problem-solving and performance evaluation.'
      ]
    },
    {
      title: 'Salesforce Developer',
      company: 'Salesforce (Agentblazer Champion Program)',
      period: 'May 2024– Jul 2024',
      type: 'Virtual Internship',
      description: [
        'Completed the Salesforce Virtual Internship under the Agentblazer Champion Program; built core applications on the Salesforce platform and gained hands-on experience with Apex, Lightning Web Components, and automation tools.'
      ]
    }
  ];

  const achievements = [
    {
      title: 'Ideathon Winner',
      description: 'Winner of Ideathon by ISTE, PVPSIT for developing an innovative IoT-based solution.',
      year: '2024'
    },
    {
      title: 'Naukri Campus Young Turks',
      description: 'Secured 94.24% in Naukri Campus Young Turks skill contest.',
      year: '2024'
    },
    {
      title: 'GATE Examination',
      description: 'Achieved an All India Rank of 6009 in GATE Examination.',
      year: '2024'
    }
  ];

  const coActivities = [
    {
      title: 'Google Cloud Jam & GenAI Campaign',
      description: 'Volunteered for Google Cloud Jam & GenAI Campaign at PVPSIT',
      year: '2024'
    },
    {
      title: 'Start-up Expo Participation',
      description: 'Participated in Start-up Expo, E-Cell, IIT Hyderabad',
      year: '2024'
    },
    {
      title: 'Project Expo Coordination',
      description: 'Coordinated Project Expo, SITAR 2K25 at PVPSIT',
      year: '2025'
    },
    {
      title: 'NCC Achievement',
      description: 'Earned the NCC \'A\' Certificate',
      year: '2023'
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
                To become a proficient Computer Science Engineer in a progressive organization, where I can apply my
                programming expertise, problem-solving skills, and knowledge of software development tools to contribute to
                innovative solutions, while continuously enhancing my technical proficiency and professional growth.
              </p>
              <p>
                As a final year student at Prasad V. Potluri Siddhartha Institute of Technology, I am passionate about 
                leveraging technology to solve real-world problems. I believe in continuous learning, collaborative 
                development, and creating impactful solutions through code.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      Final Year
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>CSE Student</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      8.87
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Current CGPA</p>
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                      10+
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Projects Built</p>
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
                  fontSize: '1.5rem'
                }}>
                  <div title="Innovation">
                    <Icon name="lightbulb" size={32} color="var(--accent-color)" />
                  </div>
                  <div title="Quality">
                    <Icon name="star" size={32} color="var(--accent-color)" />
                  </div>
                  <div title="Collaboration">
                    <Icon name="handshake" size={32} color="var(--accent-color)" />
                  </div>
                  <div title="Growth">
                    <Icon name="chart" size={32} color="var(--accent-color)" />
                  </div>
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
          
          <div style={{
            display: 'grid',
            gap: '2rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}>
            {skillCategories.map((category, index) => (
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
                  <Icon name={category.icon} size={24} color={category.color} />
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
                    {edu.degree}{edu.field && `, ${edu.field}`}
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
                    <Icon name="trophy" size={32} color="var(--accent-color)" />
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

      {/* Co-curricular Activities Section */}
      <section className="section" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Co-curricular Activities</h2>
            <p>Extracurricular involvement and leadership experiences</p>
          </div>
          
          <div className="grid grid-2">
            {coActivities.map((activity, index) => (
              <div key={activity.title} className={`card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '2rem',
                    minWidth: '60px'
                  }}>
                    <Icon name="target" size={32} color="var(--accent-color)" />
                  </div>
                  <div>
                    <h4 style={{ 
                      color: 'var(--primary-text)',
                      marginBottom: '0.5rem'
                    }}>
                      {activity.title}
                    </h4>
                    <p style={{ 
                      color: 'var(--secondary-text)',
                      marginBottom: '0.5rem'
                    }}>
                      {activity.description}
                    </p>
                    <span style={{ 
                      color: 'var(--accent-color)',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      {activity.year}
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