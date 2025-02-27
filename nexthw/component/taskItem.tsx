import React from "react";
import Image from "next/image";
import complete from "../public/complete.jpg";
import Pending from "../public/pending.jpg";
interface IProps {
  task: todos.ITodo;
}

const TaskItem = ({ task }: IProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-xs mx-auto transition-transform hover:scale-105">
      <h2 className="text-lg font-semibold text-gray-900 mb-3">
        Title :{" "}
        {task.title.length > 20
          ? task.title.substring(0, 20) + "..."
          : task.title}
      </h2>
      <p
        className={`py-1 mb-2 px-3 rounded-full text-sm font-medium w-fit ${
          task.completed
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        Status :{task.completed ? "✅ Completed" : "🕛 Pending"}
      </p>
      <div className="relative w-60 h-50">
        <Image
          src={task.completed ? complete : Pending}
          alt={task.completed ? "Completed Task" : "Pending Task"}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default TaskItem; // Fix: Correct export
