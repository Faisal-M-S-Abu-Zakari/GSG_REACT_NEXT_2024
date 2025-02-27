import React from "react";

interface IProps {
  params: Promise<{ id: string }>;
}
const page = async ({ params }: IProps) => {
  const { id } = await params;
  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
    </div>
  );
};

export default page;
