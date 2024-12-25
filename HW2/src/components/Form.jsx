import React, { useContext, useState } from "react";
import { TasksContext } from "../context/contextTasks";

const Form = () => {
    const { addTask } = useContext(TasksContext);
    const [taskValue, setTaskValue] = useState("");
    const [isUrgent, setIsUrgent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskValue.trim()) {
            addTask(taskValue, isUrgent);
            setTaskValue("");
            setIsUrgent(false);
        }
    };

    return (
        <form className="form-style" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Write your task"
                value={taskValue}
                onChange={(e) => setTaskValue(e.target.value)}
                name="task"
            />
            <div className="check-form">
                <label htmlFor="check">Is Urgent</label>
                <input
                    type="checkbox"
                    id="check"
                    checked={isUrgent}
                    onChange={() => setIsUrgent((prev) => !prev)}
                />
            </div>
            <button type="submit">Add ToDo</button>
        </form>
    );
};

export default Form;
