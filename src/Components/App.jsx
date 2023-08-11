import Todo from "./Todo";
import todosData from '../todosData'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState(todosData)
  
  const todoEls = todos.map(todo => {
    return (
      <Todo key={todo.id} text={todo.text} isComplete={todo.isComplete} />
    )
  })
  return (
    <main>
      <h1>Todo</h1>
      <main className="font-josefin-sans">
        <ul>
          {todoEls}
        </ul>
      </main>
    </main>
  );
}

export default App;
