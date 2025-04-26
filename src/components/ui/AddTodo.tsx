import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function AddTodo({ addTodo }: {addTodo: (todo: string) => void }) {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const submitTodo = (newThing: string) => {
    if (newThing !== '') {
      setNewTodo('');
      addTodo(newThing);
    }
  }

  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Add a new todo" value={newTodo} onChange={handleChange}/>
      <Button type="submit" onClick={() => submitTodo(newTodo)}>Add todo</Button>
    </div>
  )
}
