import React, { useContext } from "react";
import { TasksContext } from "../context/contextTasks";

const AllTasks = () => {
    const { tasks, toggleTaskCompletion, deleteTask } = useContext(TasksContext);

    return (
        <div>
            <h3>Your Tasks</h3>
            {tasks.map((t, index) => (
                <div className="task-container" key={index}>
                    <input
                        type="checkbox"
                        className="task-check"
                        checked={t.completed}
                        onChange={() => toggleTaskCompletion(index)}
                    />
                    <span
                        className='task-text'
                    >
                        {t.completed ? <del>{t.task}</del> : t.task}
                    </span>
                    <button
                        className="task-trash"
                        onClick={() => deleteTask(index)}
                    >
                        🗑️
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AllTasks;
