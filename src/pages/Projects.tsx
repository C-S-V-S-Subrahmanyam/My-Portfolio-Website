import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/projects.json';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
  status: string;
  completedDate: string | null;
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>(projectsData.projects);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData.projects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  useEffect(() => {
    const filterProjects = () => {
      let filtered = projects;

      // Filter by search term
      if (searchTerm) {
        filtered = filtered.filter(project =>
          project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.technologies.some(tech => 
            tech.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }

      // Filter by category
      if (selectedCategory !== 'All') {
        filtered = filtered.filter(project => project.category === selectedCategory);
      }

      // Filter by technology
      if (selectedTech !== 'All') {
        filtered = filtered.filter(project => 
          project.technologies.includes(selectedTech)
        );
      }

      setFilteredProjects(filtered);
    };

    filterProjects();
  }, [searchTerm, selectedCategory, selectedTech, projects]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleTechChange = (tech: string) => {
    setSelectedTech(tech);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedTech('All');
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-title">
        <div className="container">
          <h1>My Projects</h1>
          <p>
            Explore my portfolio of web applications, APIs, and development projects. 
            Each project demonstrates different skills and technologies.
          </p>
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
              placeholder="Search projects by name, description, or technology..."
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
                {projectsData.categories.map(category => (
                  <button
                    key={category}
                    className={`filter-tag ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Filter */}
            <div>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-text)' }}>
                Technology
              </h4>
              <div className="filter-tags">
                <button
                  className={`filter-tag ${selectedTech === 'All' ? 'active' : ''}`}
                  onClick={() => handleTechChange('All')}
                >
                  All
                </button>
                {projectsData.technologies.slice(0, 8).map(tech => (
                  <button
                    key={tech}
                    className={`filter-tag ${selectedTech === tech ? 'active' : ''}`}
                    onClick={() => handleTechChange(tech)}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Filter Summary and Clear Button */}
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
              Showing {filteredProjects.length} of {projects.length} projects
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedTech !== 'All' && ` using ${selectedTech}`}
            </p>
            
            {(searchTerm || selectedCategory !== 'All' || selectedTech !== 'All') && (
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

      {/* Featured Projects */}
      {selectedCategory === 'All' && !searchTerm && selectedTech === 'All' && (
        <section className="section" style={{ 
          paddingTop: '2rem', 
          paddingBottom: '2rem',
          background: 'var(--secondary-bg)'
        }}>
          <div className="container">
            <div className="text-center mb-5">
              <h2>Featured Projects</h2>
              <p>Highlighted projects that showcase my best work</p>
            </div>
            
            <div className="grid grid-2">
              {projects
                .filter(project => project.featured)
                .slice(0, 4)
                .map((project, index) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    index={index}
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects */}
      <section className="section">
        <div className="container">
          {!searchTerm && selectedCategory === 'All' && selectedTech === 'All' && (
            <div className="text-center mb-5">
              <h2>All Projects</h2>
              <p>Complete collection of my development work</p>
            </div>
          )}
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-3">
              {filteredProjects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              color: 'var(--secondary-text)'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
              <h3>No projects found</h3>
              <p>
                No projects match your current filters. Try adjusting your search 
                criteria or clearing the filters to see all projects.
              </p>
              <button 
                className="btn btn-primary"
                onClick={clearFilters}
                style={{ marginTop: '1rem' }}
              >
                Show All Projects
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
          <h2 style={{ marginBottom: '1rem' }}>Interested in Working Together?</h2>
          <p style={{ 
            fontSize: '1.1rem',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            I'm always excited to work on new projects and bring innovative ideas to life. 
            Let's discuss how we can collaborate on your next venture.
          </p>
          <div style={{ 
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a href="/contact" className="btn btn-primary">
              Start a Project
            </a>
            <a 
              href="https://github.com/yourusername" 
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;