export function TodoItem({todo}: {todo: string}) {
    return (
       <span className="block hover:bg-gray-100">{todo}</span> 
    )
}