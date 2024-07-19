import React, { useState } from 'react';

const TaskFilter = ({ onFilter }) => {
  const [filter, setFilter] = useState({
    name: '',
    description: '',
    tags: '',
    priority: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    onFilter(filter);
  };

  return (
    <div className="TaskFilter">
      <h2>Filter Tasks</h2>
      <input
        type="text"
        name="name"
        value={filter.name}
        onChange={handleChange}
        placeholder="Filter by name"
      />
      <input
        type="text"
        name="description"
        value={filter.description}
        onChange={handleChange}
        placeholder="Filter by description"
      />
      <input
        type="text"
        name="tags"
        value={filter.tags}
        onChange={handleChange}
        placeholder="Filter by tags"
      />
      <input
        type="number"
        name="priority"
        value={filter.priority}
        onChange={handleChange}
        placeholder="Filter by priority"
      />
      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default TaskFilter;
