import { AppContext } from "./App";
import { useContext, useState, useEffect } from "react";
import Todo from "./Todo";

export default function List() {
  const { todos, removeCompleted, selectedFilter } = useContext(AppContext);
  const [remainingCount, setRemainingCount] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const filterComplete = () => {
    setFilteredTodos((prevTodos) => {
      return prevTodos.filter((item) => item.isComplete);
    });
  };

  const filterActive = () => {
    setFilteredTodos((prevTodos) => {
      return prevTodos.filter((item) => !item.isComplete);
    });
  };

  const filterAll = () => {
    return setFilteredTodos(todos);
  };

  const selectFilter = (filter) => {
    if (filter === "Active") {
      filterActive();
    } else if (filter === "Completed") {
      filterComplete();
    } else {
      filterAll();
    }
  };

  const todoEls = filteredTodos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        isComplete={todo.isComplete}
      />
    );
  });

  const calculateRemaining = () => {
    const complete = todos.filter((todo) => !todo.isComplete);
    setRemainingCount(complete.length);
  };

  useEffect(() => {
    calculateRemaining();
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(todos);
    selectFilter(selectedFilter);
  }, [selectedFilter, todos]);

  return (
    <section className="bg-very-dark-desaturated-blue text-light-grayish-blue rounded-md">
      <ul>{todoEls}</ul>
      <section className="text-xs text-dark-grayish-blue px-5 py-4 flex justify-between font">
        <span>{remainingCount} items left</span>
        <span
          className="hover:text-light-grayish-blue cursor-pointer"
          onClick={removeCompleted}
        >
          Clear Completed
        </span>
      </section>
    </section>
  );
}
