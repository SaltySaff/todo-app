import { AppContext } from "./App";
import { useContext, useState, useEffect } from "react";
import Todo from "./Todo";

export default function List() {
  const todos = useContext(AppContext);
  const [remainingCount, setRemainingCount] = useState(0);

  const todoEls = todos.map((todo) => {
    return <Todo key={todo.id} text={todo.text} isComplete={todo.isComplete} />;
  });

  const calculateRemaining = () => {
    const complete = todos.filter(todo => !todo.isComplete)
    setRemainingCount(complete.length)
  }

  useEffect(() => {
    calculateRemaining()
  }, [todos])

  return (
    <section className="bg-very-dark-desaturated-blue text-light-grayish-blue rounded-md">
      <ul>{todoEls}</ul>
      <section className="text-xs text-dark-grayish-blue px-5 py-4 flex justify-between font">
        <span>{remainingCount} items left</span>
        <span>Clear Completed</span>
      </section>
    </section>
  );
}
