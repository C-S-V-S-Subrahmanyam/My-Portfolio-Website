import React from 'react';
import Layout from '../components/Layout';

interface Platform {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  stats?: {
    label: string;
    value: string;
  };
  featured: boolean;
}

const Platforms: React.FC = () => {
  const platforms: Platform[] = [
    {
      id: 1,
      name: 'GitHub',
      description: 'Open source contributions, repositories, and collaborative development projects.',
      url: 'https://github.com/yourusername',
      icon: '🐙',
      category: 'Development',
      stats: {
        label: 'Repositories',
        value: '25+'
      },
      featured: true
    },
    {
      id: 2,
      name: 'LinkedIn',
      description: 'Professional network, career updates, and industry connections.',
      url: 'https://linkedin.com/in/yourprofile',
      icon: '💼',
      category: 'Professional',
      stats: {
        label: 'Connections',
        value: '500+'
      },
      featured: true
    },
    {
      id: 3,
      name: 'LeetCode',
      description: 'Algorithm practice, coding challenges, and technical interview preparation.',
      url: 'https://leetcode.com/yourusername',
      icon: '💡',
      category: 'Coding Practice',
      stats: {
        label: 'Problems Solved',
        value: '150+'
      },
      featured: true
    },
    {
      id: 4,
      name: 'HackerRank',
      description: 'Competitive programming, skill assessments, and coding competitions.',
      url: 'https://hackerrank.com/yourusername',
      icon: '🏆',
      category: 'Coding Practice',
      stats: {
        label: 'Rating',
        value: 'Gold Badge'
      },
      featured: true
    },
    {
      id: 5,
      name: 'CodeChef',
      description: 'Monthly contests, algorithmic challenges, and competitive programming.',
      url: 'https://codechef.com/users/yourusername',
      icon: '👨‍🍳',
      category: 'Coding Practice',
      stats: {
        label: 'Rating',
        value: '1800+'
      },
      featured: false
    },
    {
      id: 6,
      name: 'Stack Overflow',
      description: 'Community participation, helping developers, and sharing knowledge.',
      url: 'https://stackoverflow.com/users/youruserid',
      icon: '📚',
      category: 'Community',
      stats: {
        label: 'Reputation',
        value: '2,500+'
      },
      featured: false
    },
    {
      id: 7,
      name: 'Dev.to',
      description: 'Technical articles, tutorials, and sharing development insights.',
      url: 'https://dev.to/yourusername',
      icon: '📝',
      category: 'Blogging',
      stats: {
        label: 'Articles',
        value: '15+'
      },
      featured: false
    },
    {
      id: 8,
      name: 'Codeforces',
      description: 'Competitive programming contests and algorithmic problem solving.',
      url: 'https://codeforces.com/profile/yourusername',
      icon: '⚔️',
      category: 'Coding Practice',
      stats: {
        label: 'Rating',
        value: 'Specialist'
      },
      featured: false
    },
    {
      id: 9,
      name: 'Medium',
      description: 'Technical writing, development insights, and industry perspectives.',
      url: 'https://medium.com/@yourusername',
      icon: '✍️',
      category: 'Blogging',
      stats: {
        label: 'Articles',
        value: '10+'
      },
      featured: false
    },
    {
      id: 10,
      name: 'YouTube',
      description: 'Coding tutorials, project walkthroughs, and tech discussions.',
      url: 'https://youtube.com/@yourusername',
      icon: '🎥',
      category: 'Content Creation',
      stats: {
        label: 'Videos',
        value: '20+'
      },
      featured: false
    },
    {
      id: 11,
      name: 'Twitter',
      description: 'Tech discussions, industry news, and developer community engagement.',
      url: 'https://twitter.com/yourusername',
      icon: '🐦',
      category: 'Social',
      stats: {
        label: 'Followers',
        value: '800+'
      },
      featured: false
    },
    {
      id: 12,
      name: 'Discord',
      description: 'Developer community participation and real-time collaboration.',
      url: 'https://discord.com/users/youruserid',
      icon: '💬',
      category: 'Community',
      stats: {
        label: 'Communities',
        value: '10+'
      },
      featured: false
    }
  ];

  const categories = ['All', 'Development', 'Coding Practice', 'Professional', 'Community', 'Blogging', 'Content Creation', 'Social'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPlatforms = selectedCategory === 'All' 
    ? platforms 
    : platforms.filter(platform => platform.category === selectedCategory);

  const featuredPlatforms = platforms.filter(platform => platform.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Development': 'var(--accent-color)',
      'Coding Practice': 'var(--success-color)',
      'Professional': 'var(--gradient-primary)',
      'Community': 'var(--warning-color)',
      'Blogging': 'var(--gradient-secondary)',
      'Content Creation': 'var(--error-color)',
      'Social': 'var(--gradient-accent)'
    };
    return colors[category] || 'var(--accent-color)';
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-title">
        <div className="container">
          <h1>Coding Platforms & Social Presence</h1>
          <p>
            Connect with me across various platforms where I share code, contribute to communities, 
            and engage with fellow developers.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="section" style={{ 
        paddingTop: '2rem', 
        paddingBottom: '2rem',
        background: 'var(--secondary-bg)'
      }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2>Platform Overview</h2>
            <p>My presence across different technology platforms</p>
          </div>
          
          <div className="grid grid-4">
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {platforms.length}
              </h3>
              <p style={{ margin: 0 }}>Active Platforms</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💻</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {platforms.filter(p => p.category === 'Coding Practice').length}
              </h3>
              <p style={{ margin: 0 }}>Coding Platforms</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤝</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {platforms.filter(p => p.category === 'Community').length}
              </h3>
              <p style={{ margin: 0 }}>Community Platforms</p>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📝</div>
              <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem' }}>
                {platforms.filter(p => p.category === 'Blogging').length}
              </h3>
              <p style={{ margin: 0 }}>Content Platforms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>Featured Platforms</h2>
            <p>Primary platforms where I'm most active</p>
          </div>
          
          <div className="platform-grid">
            {featuredPlatforms.map((platform, index) => (
              <div key={platform.id} className={`platform-card fade-in`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                <div className="platform-icon">{platform.icon}</div>
                <h3 className="platform-name">{platform.name}</h3>
                <p className="platform-description">{platform.description}</p>
                
                {platform.stats && (
                  <div style={{
                    background: 'var(--secondary-bg)',
                    padding: '1rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center'
                  }}>
                    <div style={{ 
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: 'var(--accent-color)',
                      marginBottom: '0.25rem'
                    }}>
                      {platform.stats.value}
                    </div>
                    <div style={{ 
                      fontSize: '0.9rem',
                      color: 'var(--secondary-text)'
                    }}>
                      {platform.stats.label}
                    </div>
                  </div>
                )}
                
                <div style={{
                  background: getCategoryColor(platform.category),
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  marginBottom: '1.5rem',
                  display: 'inline-block'
                }}>
                  {platform.category}
                </div>
                
                <a
                  href={platform.url}
                  className="platform-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Visit Profile</span>
                  <span>🔗</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section" style={{ 
        background: 'var(--secondary-bg)',
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2>Explore by Category</h2>
            <p>Browse platforms organized by purpose and activity type</p>
          </div>
          
          <div className="filter-tags" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map(category => (
              <button
                key={category}
                className={`filter-tag ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Platforms */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2>
              {selectedCategory === 'All' ? 'All Platforms' : `${selectedCategory} Platforms`}
            </h2>
            <p>
              {selectedCategory === 'All' 
                ? 'Complete list of platforms where you can find me'
                : `Platforms focused on ${selectedCategory.toLowerCase()}`
              }
            </p>
          </div>
          
          <div className="grid grid-3">
            {filteredPlatforms.map((platform, index) => (
              <div key={platform.id} className={`card slide-in-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '2rem',
                    marginRight: '1rem',
                    minWidth: '50px'
                  }}>
                    {platform.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      color: 'var(--primary-text)',
                      marginBottom: '0.25rem'
                    }}>
                      {platform.name}
                    </h3>
                    <div style={{
                      background: getCategoryColor(platform.category),
                      color: 'white',
                      padding: '0.2rem 0.8rem',
                      borderRadius: '15px',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      display: 'inline-block'
                    }}>
                      {platform.category}
                    </div>
                  </div>
                </div>
                
                <p style={{ 
                  color: 'var(--secondary-text)',
                  marginBottom: '1rem',
                  fontSize: '0.95rem'
                }}>
                  {platform.description}
                </p>
                
                {platform.stats && (
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'var(--secondary-bg)',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    marginBottom: '1rem'
                  }}>
                    <span style={{ 
                      color: 'var(--secondary-text)',
                      fontSize: '0.9rem'
                    }}>
                      {platform.stats.label}
                    </span>
                    <span style={{ 
                      color: 'var(--accent-color)',
                      fontWeight: 'bold'
                    }}>
                      {platform.stats.value}
                    </span>
                  </div>
                )}
                
                <div style={{ textAlign: 'center' }}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      width: 'auto',
                      padding: '0.6rem 1.2rem'
                    }}
                  >
                    <span>Visit {platform.name}</span>
                    <span>🔗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section className="section" style={{
        background: 'var(--secondary-bg)',
        textAlign: 'center',
        padding: '6rem 0'
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '1rem' }}>Let's Connect!</h2>
          <p style={{ 
            fontSize: '1.2rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I'm always excited to connect with fellow developers, share knowledge, 
            and collaborate on interesting projects. Follow me on these platforms 
            to stay updated with my latest work and insights.
          </p>
          
          {/* Quick Links */}
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <a 
              href="https://github.com/yourusername" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐙 Follow on GitHub
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 Connect on LinkedIn
            </a>
            <a href="/contact" className="btn btn-outline">
              📧 Send Message
            </a>
          </div>
          
          {/* Social Proof */}
          <div style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '15px',
            padding: '2rem',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <h3 style={{ marginBottom: '1rem' }}>Community Impact</h3>
            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              <div>
                <div style={{ 
                  fontSize: '2rem',
                  color: 'var(--accent-color)',
                  fontWeight: 'bold'
                }}>
                  1000+
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Total Connections
                </p>
              </div>
              <div>
                <div style={{ 
                  fontSize: '2rem',
                  color: 'var(--accent-color)',
                  fontWeight: 'bold'
                }}>
                  500+
                </div>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>
                  Problems Solved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;