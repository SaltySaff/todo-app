export default function Filter({ changeSelected, selected, children }) {
  return (
    <button
      onClick={() => changeSelected(children)}
      className={`${selected ? "text-bright-blue" : ""}`}
    >
      {children}
    </button>
  );
}
