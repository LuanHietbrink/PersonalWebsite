import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div className="projects-container">
      <h1>My GitHub Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <div className="details">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
              <p>{project.description}</p>
            </div>
            <div className="footer">
              <p className="language">Language: {project.language}</p>
              <p className="stars">Stars: {project.stargazers_count}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;