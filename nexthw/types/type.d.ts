declare namespace todos {
  export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    priority: "High" | "Medium" | "Low"; // Added priority field
  }
}
