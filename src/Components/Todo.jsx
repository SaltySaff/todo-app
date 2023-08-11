import Button from "./Button";

export default function Todo(props) {
  console.log("props", props);
  return (
    <>
      <li
        className={`flex items-center text-xs py-4 px-5 ${
          props.isComplete ? "line-through text-dark-grayish-blue" : null
        }`}
      >
        <Button isComplete={props.isComplete} />
        {props.text}
      </li>
      <hr className="border-t border-very-dark-grayish-blue2" />
    </>
  );
}

// move state to parent component, it shouldn't be in here
