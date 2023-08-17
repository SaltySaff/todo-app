import { nanoid } from "nanoid";

const todosData = [
  {
    id: nanoid(),
    text: "Complete online JavaScript course",
    isComplete: true,
  },
  {
    id: nanoid(),
    text: "Jog around the park 3x",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "10 minutes meditation",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "Read for 1 hour",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "Pick up groceries",
    isComplete: false,
  },
  {
    id: nanoid(),
    text: "Complete Todo App on Frontend Mentor",
    isComplete: false,
  },
];

export default todosData;
