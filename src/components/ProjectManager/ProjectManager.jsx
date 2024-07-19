import React, { useState } from 'react';

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
      <input
        type="text"
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
        placeholder="Enter project name"
      />
      <button onClick={handleAddProject}>Add Project</button>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
