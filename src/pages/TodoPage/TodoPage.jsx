import React from 'react';
import './TodoPage.css';

const sampleTasks = [
  {
    id: 1,
    name: 'Buy groceries',
    description: 'Milk, Bread, Cheese, Eggs, and Fruits',
    tags: ['shopping', 'urgent'],
    priority: 1,
    date: '2024-07-20',
    addedDate: '2024-07-10'
  },
  {
    id: 2,
    name: 'Prepare presentation',
    description: 'Finish slides for Monday\'s meeting',
    tags: ['work'],
    priority: 2,
    date: '2024-07-21',
    addedDate: '2024-07-11'
  },
  {
    id: 3,
    name: 'Workout',
    description: 'Gym session for an hour',
    tags: ['health', 'fitness'],
    priority: 3,
    date: '2024-07-22',
    addedDate: '2024-07-12'
  }
];

const TodoPage = () => (
  <div className="TodoPage container">
    <div className="todo-header">
      <h2>Todo List</h2>
    </div>
    <ul className="todo-list">
      {sampleTasks.map(task => (
        <li key={task.id} className="todo-item">
          <div>
            <h5>{task.name}</h5>
            <p>{task.description}</p>
            <p className="tags">Tags: {task.tags.join(', ')}</p>
            <p className="priority">Priority: {task.priority}</p>
            <p className="date">Due Date: {task.date}</p>
            <p className="added-date">Added Date: {task.addedDate}</p>
          </div>
          <div className="actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      ))}
    </ul>
    <div className="add-task">
      <button>Add New Task</button>
    </div>
  </div>
);

export default TodoPage;
