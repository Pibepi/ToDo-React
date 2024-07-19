import React, { useState } from 'react';
import './ProjectManager.css';

const ProjectManager = ({ projects, addProject }) => {
  const [newProject, setNewProject] = useState('');

  const handleAddProject = () => {
    if (newProject.trim() !== '') {
      addProject(newProject);
      setNewProject('');
    }
  };

  return (
    <div className="ProjectManager">
      <h2>Project Manager</h2>
      <div className="input-field">
        <input
          type="text"
          id="newProject"
          value={newProject}
          onChange={(e) => setNewProject(e.target.value)}
          placeholder="Enter project name"
          className="validate"
        />
        <label htmlFor="newProject" className="active">New Project</label>
      </div>
      <button className="btn waves-effect waves-light" onClick={handleAddProject}>Add Project</button>
      <ul className="collection with-header">
        <li className="collection-header"><h4>Projects</h4></li>
        {projects.map((project, index) => (
          <li key={index} className="collection-item">{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
