import React from "react";
import TaskItem from "./../component/taskItem";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
export default async function Home() {
  const res = await fetch(API_URL);
  const data = (await res.json()) as todos.ITodo[];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Task Tracker 📝
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {data.slice(0, 5).map((task) => (
          <TaskItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
