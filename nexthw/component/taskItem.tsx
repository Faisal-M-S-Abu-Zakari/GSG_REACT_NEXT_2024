import React from "react";

interface IProps {
  task: todos.ITodo;
}

const TaskItem = ({ task }: IProps) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p className="">{task.completed ? "Completed ✅" : "Pending ❌"}</p>
    </div>
  );
};

export default TaskItem; // Fix: Correct export
