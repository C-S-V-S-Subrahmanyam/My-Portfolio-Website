import React, { useState } from 'react';
import Layout from '../components/Layout';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'subrahmanyamchintalapati@gmail.com',
      link: 'mailto:subrahmanyamchintalapati@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 XXXXX-XXXXX',
      link: 'tel:+91XXXXXXXXXX'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh, India',
      link: 'https://maps.google.com/?q=Visakhapatnam,AP,India'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile'
    }
  ];

  const quickLinks = [
    {
      icon: '🐙',
      label: 'GitHub',
      description: 'View my repositories and contributions',
      link: 'https://github.com/yourusername'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      description: 'Connect with me professionally',
      link: 'https://linkedin.com/in/yourprofile'
    },
    {
      icon: '📝',
      label: 'Resume',
      description: 'Download my latest resume',
      link: '#'
    },
    {
      icon: '📋',
      label: 'Projects',
      description: 'Explore my portfolio of work',
      link: '/projects'
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just show a success message
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-title">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            I'd love to hear about your project ideas, collaboration opportunities, 
            or just have a chat about technology and development.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section" style={{ 
        paddingTop: '2rem',
        background: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Let's Connect</h2>
            <p>Multiple ways to reach out and start a conversation</p>
          </div>
          
          <div className="contact-info">
            <div className="grid grid-2">
              {contactInfo.map((info, index) => (
                <div key={info.label} className={`contact-item fade-in`} style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <span className="contact-icon">{info.icon}</span>
                  <div>
                    <h4 style={{ 
                      color: 'var(--primary-text)',
                      marginBottom: '0.25rem'
                    }}>
                      {info.label}
                    </h4>
                    <a 
                      href={info.link}
                      target={info.label === 'Location' ? '_blank' : '_self'}
                      rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                      style={{
                        color: 'var(--secondary-text)',
                        textDecoration: 'none'
                      }}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Quick Links */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>
            {/* Contact Form */}
            <div className="slide-in-left">
              <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
              
              {submitMessage && (
                <div style={{
                  background: submitMessage.includes('error') 
                    ? 'rgba(255, 107, 107, 0.1)' 
                    : 'rgba(72, 219, 251, 0.1)',
                  border: `1px solid ${submitMessage.includes('error') 
                    ? 'var(--error-color)' 
                    : 'var(--success-color)'}`,
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '2rem',
                  color: submitMessage.includes('error') 
                    ? 'var(--error-color)' 
                    : 'var(--success-color)'
                }}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <span style={{ 
                      color: 'var(--error-color)', 
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      display: 'block'
                    }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span style={{ 
                      color: 'var(--error-color)', 
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      display: 'block'
                    }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`form-input ${errors.subject ? 'error' : ''}`}
                    placeholder="What would you like to discuss?"
                  />
                  {errors.subject && (
                    <span style={{ 
                      color: 'var(--error-color)', 
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      display: 'block'
                    }}>
                      {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Tell me about your project, ideas, or just say hello!"
                    rows={6}
                  />
                  {errors.message && (
                    <span style={{ 
                      color: 'var(--error-color)', 
                      fontSize: '0.9rem',
                      marginTop: '0.25rem',
                      display: 'block'
                    }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner" style={{ 
                        width: '16px', 
                        height: '16px',
                        marginRight: '0.5rem'
                      }}></span>
                      Sending...
                    </>
                  ) : (
                    '📨 Send Message'
                  )}
                </button>

                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--muted-text)',
                  textAlign: 'center',
                  marginTop: '1rem'
                }}>
                  * Required fields. I typically respond within 24 hours.
                </p>
              </form>
            </div>

            {/* Quick Links */}
            <div className="slide-in-right">
              <h2 style={{ marginBottom: '2rem' }}>Quick Links</h2>
              
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {quickLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.link}
                    target={link.link.startsWith('http') ? '_blank' : '_self'}
                    rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card"
                    style={{
                      textDecoration: 'none',
                      padding: '1.5rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{ 
                        fontSize: '2rem',
                        minWidth: '50px',
                        textAlign: 'center'
                      }}>
                        {link.icon}
                      </div>
                      <div>
                        <h4 style={{ 
                          color: 'var(--primary-text)',
                          marginBottom: '0.25rem'
                        }}>
                          {link.label}
                        </h4>
                        <p style={{ 
                          color: 'var(--secondary-text)',
                          margin: 0,
                          fontSize: '0.9rem'
                        }}>
                          {link.description}
                        </p>
                      </div>
                      <div style={{ 
                        marginLeft: 'auto',
                        color: 'var(--accent-color)'
                      }}>
                        🔗
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="card" style={{ 
                marginTop: '2rem',
                background: 'rgba(72, 219, 251, 0.1)',
                border: '1px solid var(--success-color)'
              }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <div style={{ 
                    width: '12px',
                    height: '12px',
                    background: 'var(--success-color)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite'
                  }}></div>
                  <div>
                    <h4 style={{ 
                      color: 'var(--success-color)',
                      marginBottom: '0.25rem'
                    }}>
                      Available for New Projects
                    </h4>
                    <p style={{ 
                      color: 'var(--secondary-text)',
                      margin: 0,
                      fontSize: '0.9rem'
                    }}>
                      I'm currently accepting new freelance projects and full-time opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ 
        background: 'var(--secondary-bg)',
        padding: '4rem 0'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about working with me</p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                question: "What's your typical response time?",
                answer: "I usually respond to emails within 24 hours during business days. For urgent matters, feel free to mention it in the subject line."
              },
              {
                question: "What types of projects do you work on?",
                answer: "I specialize in full-stack web development, including React applications, Node.js APIs, e-commerce platforms, and custom web solutions."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am flexible with different time zones and communication preferences."
              },
              {
                question: "What's your preferred way to discuss projects?",
                answer: "I like to start with an email or form submission, then schedule a video call to discuss project details and requirements in depth."
              }
            ].map((faq, index) => (
              <div key={index} className="card mb-4 fade-in" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <h4 style={{ 
                  color: 'var(--accent-color)',
                  marginBottom: '1rem'
                }}>
                  {faq.question}
                </h4>
                <p style={{ 
                  color: 'var(--secondary-text)',
                  margin: 0
                }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;