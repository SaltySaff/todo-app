import { useContext } from "react";
import { AppContext } from "./App";

export default function Button({isComplete, id}) {
  const { toggleComplete } = useContext(AppContext);
  return (
    <button
      onClick={() => toggleComplete(id)}
      className={`rounded-full ring-1 ring-dark-grayish-blue p-2 mr-3 ${
        isComplete ? "bg-icon-check bg-no-repeat bg-center" : null
      }`}
    ></button>
  );
}
