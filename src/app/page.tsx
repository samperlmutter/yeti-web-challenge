"use client";

import { AddTodo } from "@/components/ui/AddTodo";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TodoItem } from "@/components/ui/TodoItem";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(['']);
  
  function addTodo(todo: string) {
    setTodos([...todos, todo])
  }

  function completeTodo(i: number) {
    setTodos([...todos.slice(0, i), ...todos.slice(i + 1)])
  }

  return (
    <div>
      <h1>YETI Web Challenge</h1>
      <p>
        This is a simple todo list app built with Next.js, Tailwind CSS, and
        shadcn/ui.
      </p>
      <ScrollArea className="h-72 w-48 rounded-md border">
        {todos.map((t, i, _) => <p key={i} onClick={() => completeTodo(i)}><TodoItem todo={t} ></TodoItem></p>)}
      </ScrollArea>
      <AddTodo addTodo={addTodo}></AddTodo>
    </div>
  );
}
