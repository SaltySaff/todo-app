import { useContext } from "react";
import { AppContext } from "./App";

export default function RemoveButton({ id }) {
  const { removeTodo } = useContext(AppContext);
  return (
    <button
      onClick={() => removeTodo(id)}
      className="w-3 bg-icon-cross bg-no-repeat bg-center"
    ></button>
  );
}
