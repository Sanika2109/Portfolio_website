// src/components/Projects.js
import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    { title: 'Automated Attendance System', description: 'RFID+Fingerprint based system', link: '#' },
    { title: 'Movie Ticket Management System', description: 'Ticket system using MongoDB', link: '#' },
    { title: 'AI-Enhanced Platform for Alzheimers', description: 'An ML-Based Project involving data fusion', link: '#' },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
