import React, { useState } from 'react';
import './TaskFilter.css';

const TaskFilter = ({ myFilter }) => {
  const [filter, setFilter] = useState({
    name: '',
    description: '',
    tags: '',
    priority: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const applyFilter = () => {
    myFilter(filter);
  };

  const resetFilter = () => {
    setFilter({
      name: '',
      description: '',
      tags: '',
      priority: '',
    });
    myFilter({
      name: '',
      description: '',
      tags: '',
      priority: '',
    });
  };

  return (
    <div className="TaskFilter">
      <h2>Filter Tasks</h2>
      <form>
        <input
          type="text"
          name="name"
          value={filter.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="text"
          name="description"
          value={filter.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="tags"
          value={filter.tags}
          onChange={handleChange}
          placeholder="Tags"
        />
        <input
          type="number"
          name="priority"
          value={filter.priority}
          onChange={handleChange}
          placeholder="Priority"
        />
      </form>
      <div className="buttons " >
        <button className='btn btnApply' onClick={applyFilter}>Apply Filter</button>
        <button className='btn btn-reset' onClick={resetFilter}>Reset Filter</button>
      </div>
    </div>
  );
};

export default TaskFilter;
