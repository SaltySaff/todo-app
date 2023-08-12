export default function Input() {
  const handleChange = () => {};
  
  return (
    <section className="flex items-center py-4 px-5 bg-very-dark-desaturated-blue mb-5 rounded-md">
      <div className="rounded-full ring-1 ring-dark-grayish-blue p-2 mr-3"></div>
      <input
        className="bg-transparent text-xs text-light-grayish-blue focus:outline-none"
        type="text"
        placeholder="Create a new todo..."
        name="todo-input"
      />
    </section>
  );
}
