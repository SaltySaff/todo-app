import { useContext, useState } from "react";
import { AppContext } from "./App";

export default function Input() {
  const { addTodo } = useContext(AppContext)
  const [inputValue, setInputValue] = useState("")

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && inputValue.trim() !== "") {
        addTodo(inputValue); // Use the addTodo function here
        setInputValue("");
    }
}

  const handleValueChange = (e) => {
    setInputValue(e.target.value)
  }

  (AppContext);
  return (
    <section className="flex items-center py-4 px-5 bg-very-dark-desaturated-blue mb-5 rounded-md">
      <div className="rounded-full ring-1 ring-dark-grayish-blue p-2 mr-3"></div>
      <input
        className="bg-transparent text-xs text-light-grayish-blue focus:outline-none"
        type="text"
        placeholder="Create a new todo..."
        name="text"
        value={inputValue}
        onKeyDown={handleKeyDown}
        onChange={handleValueChange}
      />
    </section>
  );
}
