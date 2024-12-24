import React from 'react';

const Task = () => {
  return (
    <div className="task-container">
      <input type="checkbox" className="task-check" />
      <span className="task-text">Sample Task</span>
      <button className="task-trash">🗑️</button>
    </div>
  );
};

export default Task;
