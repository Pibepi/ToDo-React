import React, { useState, useEffect } from 'react';
import './TodoPage.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import TaskFilter from '../../components/TaskFilter/TaskFilter';

const TodoPage = ({ tasks, triggerAddTaskLi, myFilter }) => {
  const [tasksDueToday, setTasksDueToday] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editedTask, setEditedTask] = useState({});

  useEffect(() => {
    setTasksDueToday(tasks);
  }, [tasks]);

  const btnEditTask = (task) => {
    setEditingTask(task);
    setEditedTask(task);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSaveEdit = () => {
    const updatedTasks = tasksDueToday.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasksDueToday(updatedTasks);
    setEditingTask(null);
  };

  const btnDeleteTask = (id) => {
    const updatedTasks = tasksDueToday.filter((task) => task.id !== id);
    setTasksDueToday(updatedTasks);
  };

  return (
    <div className="TodoPage container">
      <div className="todo-header">
        <h2>Tasks Due Today</h2>
      </div>
      {tasksDueToday.length > 0 ? (
        <ul className="todo-list">
          {tasksDueToday.map((task) => (
            <li key={task.id} className="todo-item">
              {editingTask && editingTask.id === task.id ? (
                <div className="edit-form">
                  <input
                    type="text"
                    name="name"
                    value={editedTask.name}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                  <textarea
                    name="description"
                    value={editedTask.description}
                    onChange={handleEditChange}
                    className="edit-textarea"
                  />
                  <input
                    type="text"
                    name="tags"
                    value={editedTask.tags.join(', ')}
                    onChange={(e) =>
                      setEditedTask((prevTask) => ({
                        ...prevTask,
                        tags: e.target.value.split(', '),
                      }))
                    }
                    className="edit-input"
                  />
                  <input
                    type="text"
                    name="priority"
                    value={editedTask.priority}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                  <input
                    type="text"
                    name="project"
                    value={editedTask.project}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                  <input
                    type="date"
                    name="date"
                    value={editedTask.date}
                    onChange={handleEditChange}
                    className="edit-input"
                  />
                  <div className="edit-actions">
                    <button onClick={handleSaveEdit} className="edit-button">Save</button>
                    <button onClick={() => setEditingTask(null)} className="edit-button">Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                  <h5>{task.name}</h5>
                  <p>{task.description}</p>
                  <p className="tags">Tags: {task.tags.join(', ')}</p>
                  <p className="priority">Priority: {task.priority}</p>
                  <p className="project">Project: {task.project}</p>
                  <p className="date">Due Date: {task.date}</p>
                  <p className="added-date">Added Date: {task.addedDate}</p>
                  <div className="actions">
                    <button onClick={() => btnEditTask(task)}>Edit</button>
                    <button id='btnDeleteTask' onClick={() => btnDeleteTask(task.id)}>Delete</button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks due today.</p>
      )}
      <div className="add-task">
        <button onClick={triggerAddTaskLi}>Add New Task</button>
      </div>
      <TaskFilter myFilter={myFilter} />
    </div>
  );
};

export default TodoPage;
