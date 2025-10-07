import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import certificationsData from '../data/certifications.json';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  category: string;
  date: string;
  expiryDate: string | null;
  credentialId: string;
  description: string;
  skills: string[];
  verificationUrl: string;
  status: string;
}

const Certifications: React.FC = () => {
  const [certifications] = useState<Certification[]>(certificationsData.certifications);
  const [filteredCertifications, setFilteredCertifications] = useState<Certification[]>(certificationsData.certifications);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIssuer, setSelectedIssuer] = useState('All');

  useEffect(() => {
    const filterCertifications = () => {
      let filtered = certifications;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(cert =>
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.skills.some(skill => 
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      // Filter by category
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(cert => cert.category === selectedCategory);
      }

      // Filter by issuer
      if (selectedIssuer !== 'All') {
        filtered = filtered.filter(cert => cert.issuer === selectedIssuer);
      }

      setFilteredCertifications(filtered);
    };

    filterCertifications();
  }, [searchTerm, selectedCategory, selectedIssuer, certifications]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleIssuerChange = (issuer: string) => {
    setSelectedIssuer(issuer);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedIssuer('All');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const isExpiringSoon = (expiryDate: string) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const today = new Date();
    const sixMonthsFromNow = new Date(today.setMonth(today.getMonth() + 6));
    return expiry <= sixMonthsFromNow;
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Web Development': '🌐',
      'Cloud Computing': '☁️',
      'Database': '🗄️',
      'DevOps': '🔧',
      'Security': '🔒',
      'Project Management': '📋'
    };
    return icons[category] || '📜';
  };

  // Group certifications by category
  const groupedCertifications = certificationsData.categories
    .filter(category => category !== 'All')
    .reduce((groups: { [key: string]: Certification[] }, category) => {
      groups[category] = filteredCertifications.filter(cert => cert.category === category);
      return groups;
    }, {});

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-title">
        <div className="container">
          <h1>Certifications</h1>
          <p>
            Professional certifications and credentials that validate my skills 
            and expertise in various technologies and methodologies.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="section" style={{ 
        paddingTop: '2rem', 
        paddingBottom: '2rem',
        background: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <div className="grid grid-4">
            <div className="card text-center">
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {certifications.length}
              </h3>
              <p style={{ margin: 0 }}>Total Certifications</p>
            </div>
            <div className="card text-center">
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {certifications.filter(cert => cert.status === 'Active').length}
              </h3>
              <p style={{ margin: 0 }}>Active Certifications</p>
            </div>
            <div className="card text-center">
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {certificationsData.categories.length - 1}
              </h3>
              <p style={{ margin: 0 }}>Categories</p>
            </div>
            <div className="card text-center">
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {certificationsData.issuers.length}
              </h3>
              <p style={{ margin: 0 }}>Certified Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-icon">🔍</div>
            <input
              type="text"
              className="search-input"
              placeholder="Search certifications by name, issuer, or skills..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Filter Options */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {/* Category Filter */}
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-text)' }}>
                Category
              </h4>
              <div className="filter-tags">
                {certificationsData.categories.map(category => (
                  <button
                    key={category}
                    className={`filter-tag ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category === 'All' ? '📜' : getCategoryIcon(category)} {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Issuer Filter */}
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-text)' }}>
                Issuer
              </h4>
              <div className="filter-tags">
                <button
                  className={`filter-tag ${selectedIssuer === 'All' ? 'active' : ''}`}
                  onClick={() => handleIssuerChange('All')}
                >
                  All
                </button>
                {certificationsData.issuers.slice(0, 6).map(issuer => (
                  <button
                    key={issuer}
                    className={`filter-tag ${selectedIssuer === issuer ? 'active' : ''}`}
                    onClick={() => handleIssuerChange(issuer)}
                  >
                    {issuer.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Summary */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '2rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <p style={{ 
              color: 'var(--secondary-text)',
              margin: 0
            }}>
              Showing {filteredCertifications.length} of {certifications.length} certifications
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedIssuer !== 'All' && ` from ${selectedIssuer}`}
            </p>
            
            {(searchTerm || selectedCategory !== 'All' || selectedIssuer !== 'All') && (
              <button 
                className="btn btn-outline"
                onClick={clearFilters}
                style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Certifications by Category */}
      <section className="section">
        <div className="container">
          {filteredCertifications.length > 0 ? (
            <>
              {/* Show grouped by category if no filters applied */}
              {selectedCategory === 'All' && !searchTerm && selectedIssuer === 'All' ? (
                Object.entries(groupedCertifications).map(([category, certs]) => (
                  certs.length > 0 && (
                    <div key={category} className="cert-category">
                      <h2 className="cert-category-title">
                        {getCategoryIcon(category)} {category}
                      </h2>
                      <div className="cert-grid">
                        {certs.map((cert, index) => (
                          <div key={cert.id} className={`cert-card fade-in`} style={{
                            animationDelay: `${index * 0.1}s`
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                              <div>
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                              </div>
                              
                              <div style={{ textAlign: 'right' }}>
                                <div style={{
                                  background: cert.status === 'Active' ? 'var(--success-color)' : 'var(--warning-color)',
                                  color: 'var(--primary-bg)',
                                  padding: '0.3rem 0.8rem',
                                  borderRadius: '15px',
                                  fontSize: '0.8rem',
                                  fontWeight: '500',
                                  marginBottom: '0.5rem'
                                }}>
                                  {cert.status}
                                </div>
                                
                                {cert.expiryDate && isExpiringSoon(cert.expiryDate) && (
                                  <div style={{
                                    background: 'var(--error-color)',
                                    color: 'white',
                                    padding: '0.2rem 0.6rem',
                                    borderRadius: '10px',
                                    fontSize: '0.7rem',
                                    fontWeight: '500'
                                  }}>
                                    Expires Soon
                                  </div>
                                )}
                              </div>
                            </div>
                            
                            <p className="cert-date">
                              Earned: {formatDate(cert.date)}
                              {cert.expiryDate && ` • Expires: ${formatDate(cert.expiryDate)}`}
                            </p>
                            
                            <p className="cert-description">{cert.description}</p>
                            
                            <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                              <div style={{ 
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '0.3rem'
                              }}>
                                {cert.skills.slice(0, 4).map(skill => (
                                  <span key={skill} className="skill-item" style={{ fontSize: '0.8rem' }}>
                                    {skill}
                                  </span>
                                ))}
                                {cert.skills.length > 4 && (
                                  <span className="skill-item" style={{ fontSize: '0.8rem' }}>
                                    +{cert.skills.length - 4} more
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div style={{ 
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              fontSize: '0.9rem',
                              color: 'var(--muted-text)'
                            }}>
                              <span>ID: {cert.credentialId}</span>
                              <a 
                                href={cert.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: 'var(--accent-color)',
                                  textDecoration: 'none',
                                  fontSize: '0.9rem',
                                  fontWeight: '500'
                                }}
                              >
                                🔗 Verify
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                ))
              ) : (
                // Show all filtered certifications in a single grid
                <div className="cert-grid">
                  {filteredCertifications.map((cert, index) => (
                    <div key={cert.id} className={`cert-card fade-in`} style={{
                      animationDelay: `${index * 0.1}s`
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div>
                          <h3 className="cert-title">{cert.title}</h3>
                          <p className="cert-issuer">{cert.issuer}</p>
                          <span style={{
                            background: 'var(--accent-color)',
                            color: 'var(--primary-bg)',
                            padding: '0.2rem 0.6rem',
                            borderRadius: '10px',
                            fontSize: '0.8rem',
                            fontWeight: '500'
                          }}>
                            {cert.category}
                          </span>
                        </div>
                        
                        <div style={{ textAlign: 'right' }}>
                          <div style={{
                            background: cert.status === 'Active' ? 'var(--success-color)' : 'var(--warning-color)',
                            color: 'var(--primary-bg)',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '15px',
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            marginBottom: '0.5rem'
                          }}>
                            {cert.status}
                          </div>
                          
                          {cert.expiryDate && isExpiringSoon(cert.expiryDate) && (
                            <div style={{
                              background: 'var(--error-color)',
                              color: 'white',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '10px',
                              fontSize: '0.7rem',
                              fontWeight: '500'
                            }}>
                              Expires Soon
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <p className="cert-date">
                        Earned: {formatDate(cert.date)}
                        {cert.expiryDate && ` • Expires: ${formatDate(cert.expiryDate)}`}
                      </p>
                      
                      <p className="cert-description">{cert.description}</p>
                      
                      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <div style={{ 
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.3rem'
                        }}>
                          {cert.skills.slice(0, 4).map(skill => (
                            <span key={skill} className="skill-item" style={{ fontSize: '0.8rem' }}>
                              {skill}
                            </span>
                          ))}
                          {cert.skills.length > 4 && (
                            <span className="skill-item" style={{ fontSize: '0.8rem' }}>
                              +{cert.skills.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        color: 'var(--muted-text)'
                      }}>
                        <span>ID: {cert.credentialId}</span>
                        <a 
                          href={cert.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: 'var(--accent-color)',
                            textDecoration: 'none',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                          }}
                        >
                          🔗 Verify
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--secondary-text)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3>No certifications found</h3>
              <p>
                No certifications match your current filters. Try adjusting your search 
                criteria or clearing the filters to see all certifications.
              </p>
              <button 
                className="btn btn-primary"
                onClick={clearFilters}
                style={{ marginTop: '1rem' }}
              >
                Show All Certifications
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{
        background: 'var(--secondary-bg)',
        textAlign: 'center',
        padding: '4rem 0'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Continuous Learning Journey</h2>
          <p style={{ 
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I believe in continuous learning and staying updated with the latest 
            technologies and industry best practices. These certifications represent 
            my commitment to professional growth and excellence.
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="/contact" className="btn btn-outline">
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Certifications;