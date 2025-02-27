import React from "react";
import complete from "../../../public/complete.jpg";
import Pending from "../../../public/pending.jpg";
import Image from "next/image";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
interface IProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: IProps) => {
  const { id } = await params;
  const res = await fetch(`${API_URL}/${id}`);
  const data = (await res.json()) as todos.ITodo;
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Task Details
        </h1>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Task ID: {data.id}
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Title: {data.title}
        </h2>
        <p
          className={`py-1 mb-4 px-3 rounded-full text-sm font-medium w-fit ${
            data.completed
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          Status: {data.completed ? "✅ Completed" : "🕛 Pending"}
        </p>
        <div className="relative w-full h-60 mb-6 rounded-md overflow-hidden">
          <Image
            src={data.completed ? complete : Pending}
            alt={data.completed ? "Completed Task" : "Pending Task"}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
