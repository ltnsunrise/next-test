/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { createContext, useContext } from "react";

type TodoContextType = any;

const TodoStateContext = createContext<TodoContextType | null>(null);
const TodoActionContext = createContext<{
  // TODO: define actions
  login: (u: any) => void;
  logout: () => void;
} | null>(null);

export const TodoProvider = ({ children, todoPromise }: { children: React.ReactNode; todoPromise: any }) => {
  // const todoPromise = useMemo(() => getTodoList(), []);

  return (
    <TodoActionContext.Provider value={null}>
      <TodoStateContext.Provider value={{ todoPromise }}>{children}</TodoStateContext.Provider>
    </TodoActionContext.Provider>
  );
};

export const useTodoState = () => {
  const ctx = useContext(TodoStateContext);
  if (ctx === null) throw new Error("useTodoState must be used within TodoProvider");
  return ctx;
};

export const useTodoActions = () => {
  const ctx = useContext(TodoActionContext);
  if (ctx === null) throw new Error("useTodoActions must be used within TodoProvider");
  return ctx;
};
