import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import TodoPage from './pages/TodoPage/TodoPage';
import './App.css';
import moment from 'moment';
import ProjectManager from './components/ProjectManager/ProjectManager';
import NotFoundPage from './pages/NotFoundPage/NotFoundPaage';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'Buy groceries',
      description: 'Milk, Bread, Cheese, Eggs, and Fruits',
      tags: ['shopping', 'urgent'],
      priority: 1,
      date: '2024-07-20',
      addedDate: '2024-07-15',
      project: 'Personal'
    },
    {
      id: 2,
      name: 'Prepare presentation',
      description: 'Finish slides for Monday\'s meeting',
      tags: ['work'],
      priority: 2,
      date: '2024-07-21',
      addedDate: '2024-07-16',
      project: 'Work'
    },
    {
      id: 3,
      name: 'Workout',
      description: 'Gym session for an hour',
      tags: ['health', 'fitness'],
      priority: 3,
      date: '2024-07-22',
      addedDate: '2024-07-17',
      project: 'Personal'
    }
  ]);

  const navRef = useRef();
  const [projects, setProjects] = useState(['Personal', 'Work']);
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [filter, setFilter] = useState({
    name: '',
    description: '',
    tags: '',
    priority: '',
  });

  const addProject = (project) => {
    setProjects(prevProjects => [...prevProjects, project]);
  };

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: tasks.length + 1, addedDate: moment().format('YYYY-MM-DD') }];
    setTasks(newTasks);
    applyFilter(newTasks, filter);
  };

  const triggerAddTaskLi = () => {
    if (navRef.current) {
      navRef.current.addTaskLi();
    }
  };

  const applyFilter = (tasksToFilter, currentFilter) => {
    const filtered = tasksToFilter.filter((task) => {
      return (
        (currentFilter.name === '' || task.name.includes(currentFilter.name)) &&
        (currentFilter.description === '' || task.description.includes(currentFilter.description)) &&
        (currentFilter.tags === '' || task.tags.some(tag => tag.includes(currentFilter.tags))) &&
        (currentFilter.priority === '' || task.priority === parseInt(currentFilter.priority))
      );
    });
    setFilteredTasks(filtered);
  };

  const handleFilter = (currentFilter) => {
    setFilter(currentFilter);
    applyFilter(tasks, currentFilter);
  };

  return (
    <Router>
      <div className="App">
        <Nav ref={navRef} addTask={addTask} projects={projects} />
        <Routes>
          <Route path="/" element={<TodoPage tasks={filteredTasks} triggerAddTaskLi={triggerAddTaskLi} myFilter={handleFilter} />} />
          <Route path="/project" element={<ProjectManager projects={projects} addProject={addProject} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
