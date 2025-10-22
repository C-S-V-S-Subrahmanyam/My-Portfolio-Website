import React from 'react';
import Icon from './Icon';
import '../styles/components.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/C-S-V-S-Subrahmanyam',
      icon: 'github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/subrahmanyam25',
      icon: 'linkedin'
    },
    {
      name: 'Linktree',
      url: 'https://linktr.ee/subrahmanyam_2510',
      icon: 'linktree'
    },
    {
      name: 'Email',
      url: 'mailto:subrahmanyam310308@gmail.com',
      icon: 'email'
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
                  <Icon name={link.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              {quickLinks.map((link) => (
                <a key={link.name} href={link.path} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>📍 Secunderabad, India</p>
            <p>📧 subrahmanyam310308@gmail.com</p>
            <p>📱 +91- 6303247136</p>
            <p>🌐 www.yourwebsite.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Chinthalapati Sri Venkata Sai Subrahmanyam. All rights reserved. | 
            Built with React.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;