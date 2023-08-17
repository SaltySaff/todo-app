import { AppContext } from "./App";
import { useContext, useState, useEffect } from "react";
import Todo from "./Todo";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function List() {
  const { todos, removeCompleted, selectedFilter } = useContext(AppContext);
  const [remainingCount, setRemainingCount] = useState(0);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const selectFilter = (filter) => {
    if (filter === "Active") {
      return todos.filter((item) => !item.isComplete);
    } else if (filter === "Completed") {
      return todos.filter((item) => item.isComplete);
    } else {
      return [...todos];
    }
};

  const todoEls = filteredTodos.map((todo, index) => {
    console.log('Draggable ID:', todo.id)
    return (
      <Draggable key={todo.id} draggableId={todo.id} index={index}>
        {(provided) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isComplete={todo.isComplete}
            innerRef={provided.innerRef}
            draggableProps={provided.draggableProps}
            dragHandleProps={provided.dragHandleProps}
          />
        )}
      </Draggable>
    );
  });

  const calculateRemaining = () => {
    const complete = todos.filter((todo) => !todo.isComplete);
    setRemainingCount(complete.length);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedTodos = Array.from(filteredTodos);
    const [reorderedItem] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, reorderedItem);
    
    setFilteredTodos(reorderedTodos);
};

  useEffect(() => {
    calculateRemaining();
  }, [todos]);

  useEffect(() => {
    setFilteredTodos(selectFilter(selectedFilter));
}, [selectedFilter, todos]);

  return (
    <section className="bg-very-dark-desaturated-blue text-light-grayish-blue rounded-md">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todoEls}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
