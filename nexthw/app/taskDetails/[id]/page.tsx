import React from "react";

import Link from "next/link";

import TaskDetails from "@/component/TaskDetails";
import { notFound } from "next/navigation";

interface IProps {
  params: Promise<{ id: number }>;
}
const page = async ({ params }: IProps) => {
  const { id } = await params;
  if (id > 200) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 text-lg mb-6 inline-block"
      >
        &larr; Back To Tasks
      </Link>
      <TaskDetails id={id} />
    </div>
  );
};

export default page;
