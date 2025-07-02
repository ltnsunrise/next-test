import "server-only";

import TodoList from "@/components/features/TodoList";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="p-6">
      <div className="w-full max-w-lg mx-auto pb-10">
        <CardHeader>
          <CardTitle className="text-2xl">To-Do List</CardTitle>
          <CardDescription>Add new tasks to your to-do list</CardDescription>
        </CardHeader>
      </div>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <TodoList />
      </Suspense>
    </div>
  );
}
