import { createContext, useState, useEffect } from "react";

export const TasksContext = createContext();

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task, isUrgent) => {
        setTasks((prevTasks) => [
            ...prevTasks,
            { task, isUrgent, completed: false },
        ]);
    };

    const toggleTaskCompletion = (index) => {
        setTasks((prevTasks) =>
            prevTasks.map((t, i) =>
                i === index ? { ...tasks, completed: !t.completed } : tasks
            )
        );
    };

    const deleteTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_ , i) => i !== index));
    };

    const contextValues = {
        tasks,
        addTask,
        toggleTaskCompletion,
        deleteTask,
    };

    return <TasksContext.Provider value={contextValues}>{children}</TasksContext.Provider>;
};

export default TasksProvider;
