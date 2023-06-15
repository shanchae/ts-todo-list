import React, { useState } from 'react'

interface item {
    id: number;
    text: string;
    completed: boolean;
}

export const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<item[]>([
        { id: 1, text: "Take a walk in the park", completed: false},
        { id: 2, text: "Eat breakfast", completed: false},
    ])
    const [input, setInput] = useState<string>("")

    const handleToggle = ( id:number ) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id){
                    return { ...todo, completed: !todo.completed};
                }
                return todo
            })
        )
    }

    const handleClick = () => {
        const newTodo : item = {
            id: Date.now(),
            text: input,
            completed: false
        }

        setTodos([...todos, newTodo])
        setInput("")
    }

  return (
    <div>
        <h1>ToDo List</h1>
        <ul>
            {todos.map((todo) => (
                <li 
                    key={todo.id}
                    onClick={() => handleToggle(todo.id)}
                    style={{textDecoration:todo.completed ? "line-through" : "none"}}
                >
                    {todo.text}
                </li>
            ))}
        </ul>
        <input 
            type="text" 
            placeholder='Add new todo item' 
            onChange={(e) =>  setInput(e.target.value)} 
            value={input}  
        />
        <button onClick={handleClick}>ADD ITEM</button>
    </div>
  )
}
