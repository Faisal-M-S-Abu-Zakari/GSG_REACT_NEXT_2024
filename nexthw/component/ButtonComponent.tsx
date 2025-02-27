"use client";
import React from "react";
import { useRouter } from "next/navigation";

interface IProps {
  id: number;
}

const ButtonComponent = ({ id }: IProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/taskDetails/${id}`)}
      className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      View Task
    </button>
  );
};

export default ButtonComponent;
