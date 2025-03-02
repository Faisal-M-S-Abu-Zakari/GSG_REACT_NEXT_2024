import React from "react";
import { priorityStyles } from "@/services/todo.services";
import complete from "../public/complete.jpg";
import Pending from "../public/pending.jpg";
import Image from "next/image";
interface IProps {
  dataWithProirity: todos.ITodo;
}

const TaskDetails = async ({ dataWithProirity }: IProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 transform transition-transform hover:scale-105">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">
        Task Details
      </h1>
      <p className="text-2xl font-medium text-gray-800 mb-4">
        Task ID: {dataWithProirity.id}
      </p>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">
        Title: {dataWithProirity.title}
      </h2>
      <p
        className={`py-1 mb-6 px-4 rounded-full text-sm font-medium w-fit ${
          dataWithProirity.completed
            ? "bg-green-100 text-green-600"
            : "bg-red-100 text-red-600"
        }`}
      >
        Status: {dataWithProirity.completed ? "✅ Completed" : "🕛 Pending"}
      </p>
      <p
        className={`py-1 mb-6 px-4 rounded-full text-sm font-medium w-fit border ${
          priorityStyles[dataWithProirity.priority]
        }`}
      >
        Priority: {dataWithProirity.priority}
      </p>
      <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={dataWithProirity.completed ? complete : Pending}
          alt={dataWithProirity.completed ? "Completed Task" : "Pending Task"}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default TaskDetails;
