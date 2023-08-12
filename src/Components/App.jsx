import todosData from "../todosData";
import List from "./List";
import Header from "./Header";
import Input from "./Input";
import { useState, createContext } from "react";
import { nanoid } from "nanoid";

const AppContext = createContext();

function App() {
  const [todos, setTodos] = useState(todosData);

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item,
      ),
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  const removeCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((item) => !item.isComplete));
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    const newTodo = { id: nanoid(), text: value, isComplete: false };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log(newTodo);
  };

  return (
    <AppContext.Provider
      value={{ todos, toggleComplete, handleInputChange, removeTodo, removeCompleted }}
    >
      <main className="bg-very-dark-blue min-h-screen font-josefin-sans flex flex-col p-5 justify-center">
        <Header />
        <Input />
        <List todos={todos} />
      </main>
    </AppContext.Provider>
  );
}

export default App;
export { AppContext };

// gradient:
// bg-gradient-to-r from-gradient-1 to-gradient-2
