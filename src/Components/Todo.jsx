import CompleteButton from "./CompleteButton";
import RemoveButton from "./RemoveButton"

export default function Todo(props) {
  return (
    <>
      <li
        className={`flex justify-between text-xs py-4 px-5 ${
          props.isComplete ? "line-through text-dark-grayish-blue" : null
        }`}
      >
        <span className="flex items-center">
          <CompleteButton id={props.id} isComplete={props.isComplete} />
          {props.text}
        </span>
        <RemoveButton id={props.id} />
      </li>
      <hr className="border-t border-very-dark-grayish-blue2" />
    </>
  );
}

// move state to parent component, it shouldn't be in here
