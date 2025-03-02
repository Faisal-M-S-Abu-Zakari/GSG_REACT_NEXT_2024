const API_URL = "https://jsonplaceholder.typicode.com/todos";

const getPriority = (id: number): "High" | "Medium" | "Low" => {
  if (id % 3 === 0) return "High";
  if (id % 3 === 1) return "Medium";
  return "Low";
};
const priorityStyles = {
  High: "bg-red-100 text-red-600 border-red-500",
  Medium: "bg-yellow-100 text-yellow-600 border-yellow-500",
  Low: "bg-green-100 text-green-600 border-green-500",
};
const fetchData = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch task details");
  }
  const data = (await res.json()) as todos.ITodo;
  const dataWithProirity: todos.ITodo = {
    ...data,
    priority: getPriority(data.id),
  };
  return {
    dataWithProirity,
  };
};
export { fetchData, priorityStyles };
