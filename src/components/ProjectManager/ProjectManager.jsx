import React, { useState } from 'react';
import './ProjectManager.css';

const ProjectManager = ({ projects, addProject, removeProject }) => {
  const [newProject, setNewProject] = useState('');

  const handleAddProject = () => {
    if (newProject.trim() !== '') {
      addProject(newProject);
      setNewProject('');
    }
  };

  const handleRemoveProject = (project) => {
    removeProject(project);
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
          <li key={index} className="collection-item">
            {project}
            <button className="btn red right" onClick={() => handleRemoveProject(project)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
