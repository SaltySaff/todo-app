import todosData from "../todosData";
import List from "./List";
import Header from "./Header";
import Input from "./Input"
import { useState, createContext } from "react";

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

  return (
    <AppContext.Provider value={{todos, toggleComplete}}>
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
