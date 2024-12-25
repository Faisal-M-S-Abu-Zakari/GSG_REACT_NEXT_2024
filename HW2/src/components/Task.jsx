import React from 'react';

const Task = ({task}) => {
  return (
    <div className="task-container">
      <input type="checkbox" className="task-check" />
      <span className="task-text">{task}</span>
      <button className="task-trash">🗑️</button>
    </div>
  );
};

export default Task;
