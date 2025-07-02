"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrashIcon } from "lucide-react";
import { use } from "react";
import { useTodoState } from "@/contexts/TodoContext";

export default function TodoList() {
  const { todoPromise } = useTodoState();
  const todoList = use(todoPromise);

  return (
    <Card key="1" className="w-full max-w-lg mx-auto">
      <CardContent className="flex flex-col gap-4">
        {todoList.map((item: any) => (
          <div key={item.id} className="flex items-center gap-4">
            <Checkbox className="peer-absolute left-0 translate-x-2.5" id="todo1" />
            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="todo1">
              {item.title}
            </label>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline" onClick={() => console.log(`Delete task with ID: ${item.id}`)}>
              <TrashIcon className="h-4 w-4" />
              <span className="sr-only">Delete task</span>
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="gap-4">
        <form className="flex w-full">
          <Input className="rounded-none border-0 border-gray-200 dark:border-gray-800 shadow-none flex-1" placeholder="Add a new task" type="text" />
          <Button type="submit">Add</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
