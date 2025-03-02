import React from "react";

import Link from "next/link";

import TaskDetails from "@/component/TaskDetails";
import { notFound } from "next/navigation";
import { fetchData } from "@/services/todo.services";
interface IProps {
  params: Promise<{ id: number }>;
}
const page = async ({ params }: IProps) => {
  const { id } = await params;
  if (id > 200) return notFound();
  const { dataWithProirity } = await fetchData(id);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 text-lg mb-6 inline-block"
      >
        &larr; Back To Tasks
      </Link>
      <TaskDetails dataWithProirity={dataWithProirity} />
    </div>
  );
};

export default page;
