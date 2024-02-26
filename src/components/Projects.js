import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);
  const githubUsername = 'SaiJaswanth52';

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${githubUsername}/repos`);
        setRepositories(response.data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepositories();
  }, [githubUsername]);

  return (
    <div>
      <h2><u> <span style={{color:"red"}}> Projects </span></u> <sub>Following are my GitHub Repositores and Web Links</sub> </h2>       
      {repositories.length === 0 ? (
        <p>No repositories found for {githubUsername}.</p>
      ) : (
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
              <p>Description: {repo.description}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                WebsiteUrl: {repo.name}
              </a>            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;