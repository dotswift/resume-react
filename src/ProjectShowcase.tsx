import React, { useState } from 'react';
import './ProjectShowcase.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  imageUrl: string;
  link?: string;
}

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Jimmy Johns Mobile App",
      description: "Contributed to mobile application serving millions of customers across 2,000+ US stores, earning over 500 5-star reviews.",
      technologies: ["Swift", "UIKit", "REST API", "Payment Integration"],
      category: "Mobile",
      imageUrl: "/images/project-jj.jpg"
    },
    {
      id: 2,
      title: "Ford EV Platform",
      description: "Developed key features for Ford's EV platform and made significant contributions to the FordPass iOS application.",
      technologies: ["Swift", "Objective-C", "Authentication", "Bluetooth"],
      category: "Mobile",
      imageUrl: "/images/project-ford.jpg"
    },
    {
      id: 3,
      title: "Sports Betting Platform",
      description: "Developed payment processing features including Apple Pay and ACH deposits in a heavily regulated gaming industry.",
      technologies: ["React", "Node.js", "Payment Gateway", "Identity Verification"],
      category: "Web",
      imageUrl: "/images/project-betting.jpg"
    },
    {
      id: 4,
      title: "Media Network Audience Participation",
      description: "Created software for audience participation in live broadcasts of high-profile events like The Oscars, NHL Playoffs, and NBA games.",
      technologies: ["iOS", "Web", "Real-time", "WebSockets"],
      category: "Hybrid",
      imageUrl: "/images/project-media.jpg"
    },
    {
      id: 5,
      title: "Healthcare Mobile Suite",
      description: "Developed mobile applications for over 50 health systems in the USA, UK, and Canada with specialized healthcare industry requirements.",
      technologies: ["iOS", "Android", "Windows Mobile", "Healthcare APIs"],
      category: "Mobile",
      imageUrl: "/images/project-health.jpg"
    },
    {
      id: 6,
      title: "Agentic AI Application",
      description: "Led development of an AI-powered application leveraging large language models for automated task completion.",
      technologies: ["TypeScript", "React", "LLM API", "Node.js"],
      category: "AI",
      imageUrl: "/images/project-ai.jpg"
    }
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Mobile', 'Web', 'AI', 'Hybrid'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="project-showcase">
      <div className="project-filters">
        {categories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image" style={{ backgroundImage: `url(${project.imageUrl})` }}>
              <div className="project-overlay">
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {project.link && (
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                )}
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;