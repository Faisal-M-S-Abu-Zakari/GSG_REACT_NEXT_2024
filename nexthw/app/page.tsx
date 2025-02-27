import Image from "next/image";

import TaskItem from "./../component/taskItem";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
export default async function Home() {
  const res = await fetch(API_URL);
  const data = (await res.json()) as todos.ITodo[];

  return (
    <div>
      <h1>Task Tracker</h1>
      {data.slice(0, 5).map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </div>
  );
}
