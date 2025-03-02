import React from "react";
import Image from "next/image";
import complete from "../public/complete.jpg";
import Pending from "../public/pending.jpg";

import Link from "next/link";

interface IProps {
  task: todos.ITodo;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xs mx-auto transition-transform hover:scale-105 transform hover:shadow-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-3 truncate">
        {task.title.length > 20
          ? task.title.substring(0, 20) + "..."
          : task.title}
      </h2>

      <p
        className={`py-1 mb-4 px-3 rounded-full text-sm font-medium w-fit ${
          task.completed
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        Status: {task.completed ? "✅ Completed" : "🕛 Pending"}
      </p>

      <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
        <Image
          src={task.completed ? complete : Pending}
          alt={task.completed ? "Completed Task" : "Pending Task"}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <Link
        href={`/taskDetails/${task.id}`}
        className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        View Details
      </Link>
    </div>
  );
};

export default TaskCard; // Fix: Correct export
