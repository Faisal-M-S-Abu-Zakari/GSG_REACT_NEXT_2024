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
const page = async ({ params }: IProps) => {
  const { id } = await params;
  if (id > 200) return notFound();
  const res = await fetch(`${API_URL}/${id}`);
  const data = (await res.json()) as todos.ITodo;
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
          Task ID: {data.id}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Title: {data.title}
        </h2>
        <p
          className={`py-1 mb-6 px-4 rounded-full text-sm font-medium w-fit ${
            data.completed
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          Status: {data.completed ? "✅ Completed" : "🕛 Pending"}
        </p>
        <div className="relative w-full h-80 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={data.completed ? complete : Pending}
            alt={data.completed ? "Completed Task" : "Pending Task"}
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
