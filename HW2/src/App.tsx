import React from "react";
import "./App.css";
import Form from "./components/Form";
import TotalDataList from "./components/TotalDataList";
import AllTasks from "./components/AllTasks";
import TasksProvider from "./context/contextTasks";

function App() {
    return (
        <div className="container">
            <TasksProvider>
                <Form />
                <TotalDataList />
                <AllTasks />
            </TasksProvider>
        </div>
    );
}

export default App;
