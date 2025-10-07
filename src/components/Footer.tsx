import React from 'react';
import '../styles/components.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: '🐙'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: '🐦'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: '📧'
    }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          {/* About Section */}
          <div className="footer-section">
            <h3>About</h3>
            <p>
              A passionate full-stack developer creating innovative solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                >
                  <span className="social-icon">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            {quickLinks.map((link) => (
              <a key={link.name} href={link.path}>
                {link.name}
              </a>
            ))}
          </div>

          {/* Skills */}
          <div className="footer-section">
            <h3>Skills</h3>
            <p>React.js</p>
            <p>Node.js</p>
            <p>TypeScript</p>
            <p>MongoDB</p>
            <p>Python</p>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📍 City, Country</p>
            <p>📧 your.email@example.com</p>
            <p>📱 +1 (555) 123-4567</p>
            <p>🌐 www.yourwebsite.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Your Name. All rights reserved. | 
            Built with React.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;