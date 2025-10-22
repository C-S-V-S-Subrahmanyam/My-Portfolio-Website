import React, { useState } from 'react';
import Icon from './Icon';
import '../styles/components.css';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  status: string;
  completedDate: string | null;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Create placeholder image with project-specific colors
  const getPlaceholderColor = (id: number) => {
    const colors = ['#61dafb', '#f06529', '#4db33d', '#d83b01', '#ff9900', '#7b68ee'];
    return colors[id % colors.length];
  };

  return (
    <>
      <div 
        className={`project-card fade-in`} 
        style={{ animationDelay: `${index * 0.2}s`, cursor: 'pointer' }}
        onClick={openModal}
      >
        <div className="project-image">
          {/* Placeholder image until actual images are uploaded */}
          <div 
            style={{
              width: '100%',
              height: '200px',
              background: `linear-gradient(135deg, ${getPlaceholderColor(project.id)}, ${getPlaceholderColor(project.id)}AA)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '3rem',
              borderRadius: '8px 8px 0 0'
            }}
          >
            {project.category === 'AI/ML' ? <Icon name="laptop" size={48} color="white" /> : 
             project.category === 'Mobile' ? <Icon name="laptop" size={48} color="white" /> :
             project.category === 'IoT' ? <Icon name="cogs" size={48} color="white" /> :
             project.category === 'Frontend' ? <Icon name="code" size={48} color="white" /> : <Icon name="tools" size={48} color="white" />}
          </div>
          <div className="project-overlay">
            <span className="view-project">Click to View Details</span>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="project-tech">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="tech-tag">+{project.technologies.length - 3} more</span>
            )}
          </div>
          <div className="project-status">
            <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
              {project.status}
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <Icon name="close" size={20} />
            </button>
            
            {/* Project Image */}
            <div className="modal-image">
              <div 
                style={{
                  width: '100%',
                  height: '300px',
                  background: `linear-gradient(135deg, ${getPlaceholderColor(project.id)}, ${getPlaceholderColor(project.id)}AA)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '4rem',
                  borderRadius: '12px'
                }}
              >
                {project.category === 'AI/ML' ? '🤖' : 
                 project.category === 'Mobile' ? '📱' :
                 project.category === 'IoT' ? '🌡️' :
                 project.category === 'Frontend' ? '💻' : '🚀'}
              </div>
            </div>

            {/* Project Details */}
            <div className="modal-body">
              <div className="modal-header">
                <h2>{project.title}</h2>
                <span className={`status-badge ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>

              <p className="modal-description">{project.longDescription}</p>

              {/* Technologies */}
              <div className="modal-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-list">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag-modal">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <Icon name="github" size={16} /> View Code
                </a>
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Icon name="external" size={16} /> Live Demo
                  </a>
                )}
              </div>

              {/* Additional Info */}
              <div className="project-meta">
                <div className="meta-item">
                  <strong>Category:</strong> {project.category}
                </div>
                {project.completedDate && (
                  <div className="meta-item">
                    <strong>Completed:</strong> {new Date(project.completedDate).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;