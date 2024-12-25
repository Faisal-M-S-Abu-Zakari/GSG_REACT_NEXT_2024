import React, { useContext } from "react";
import { TasksContext } from "../context/contextTasks";

const TotalDataList = () => {
    const { tasks } = useContext(TasksContext);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((task) => task.completed).length;
    const urgentTasks = tasks.filter((task) => task.isUrgent).length;

    return (
        <div className="total-data-list">
            <div className="total-data">
                <h3>{totalTasks}</h3>
                <h1>Created Tasks</h1>
            </div>
            <div className="total-data">
                <h3>{completedTasks}</h3>
                <h1>Completed Tasks</h1>
            </div>
            <div className="total-data">
                <h3>{urgentTasks}</h3>
                <h1>Urgent Tasks</h1>
            </div>
        </div>
    );
};

export default TotalDataList;
