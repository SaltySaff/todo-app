export default function Button({ isComplete }) {
  return (
    <button
      className={`rounded-full ring-1 ring-dark-grayish-blue p-2 mr-3 ${
        isComplete ? "bg-icon-check bg-no-repeat bg-center" : null
      }`}
    ></button>
  );
}
