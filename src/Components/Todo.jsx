import CompleteButton from "./CompleteButton";
import RemoveButton from "./RemoveButton";

export default function Todo(props) {
  return (
    <>
      <li
        ref={props.innerRef}
        {...props.draggableProps}
        {...props.dragHandleProps}
        className={`bg-very-dark-desaturated-blue rounded-md flex flex-col text-xs md:text-sm  ${
          props.isComplete ? "line-through text-dark-grayish-blue" : null
        }`}
      >
        <div className="flex justify-between py-4 px-5">
          <span className="flex items-center">
            <CompleteButton id={props.id} isComplete={props.isComplete} />
            {props.text}
          </span>
          <RemoveButton id={props.id} />
        </div>
        <hr className="border-t border-very-dark-grayish-blue2" />
      </li>
    </>
  );
}
