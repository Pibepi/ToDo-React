import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import TodoPage from './pages/TodoPage/TodoPage';
import './App.css';
import moment from 'moment';
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
      addedDate: '2024-07-15'
    },
    {
      id: 2,
      name: 'Prepare presentation',
      description: 'Finish slides for Monday\'s meeting',
      tags: ['work'],
      priority: 2,
      date: '2024-07-21',
      addedDate: '2024-07-16'
    },
    {
      id: 3,
      name: 'Workout',
      description: 'Gym session for an hour',
      tags: ['health', 'fitness'],
      priority: 3,
      date: '2024-07-22',
      addedDate: '2024-07-17'
    }
  ]);

  const navRef = useRef();

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, { ...task, id: prevTasks.length + 1, addedDate: moment().format('YYYY-MM-DD') }]);
  };

  const triggerAddTaskLi = () => {
    if (navRef.current) {
      navRef.current.addTaskLi();
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav ref={navRef} addTask={addTask} />
        <Routes>
          <Route path="/" element={<TodoPage tasks={tasks} triggerAddTaskLi={triggerAddTaskLi} />} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
