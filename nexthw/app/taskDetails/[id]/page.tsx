import React from "react";
import complete from "../../../public/complete.jpg";
import Pending from "../../../public/pending.jpg";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
interface IProps {
  params: Promise<{ id: number }>;
}
const getPriority = (id: number): "High" | "Medium" | "Low" => {
  if (id % 3 === 0) return "High";
  if (id % 3 === 1) return "Medium";
  return "Low";
};
const page = async ({ params }: IProps) => {
  const { id } = await params;
  if (id > 200) return notFound();
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch task details");
  }
  const data = (await res.json()) as todos.ITodo;
  const dataWithProirity: todos.ITodo = {
    ...data,
    priority: getPriority(data.id),
  };
  const priorityStyles = {
    High: "bg-red-100 text-red-600 border-red-500",
    Medium: "bg-yellow-100 text-yellow-600 border-yellow-500",
    Low: "bg-green-100 text-green-600 border-green-500",
  };
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 text-lg mb-6 inline-block"
      >
        &larr; Back To Tasks
      </Link>
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
            priorityStyles[data.priority]
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
    </div>
  );
};

export default page;
