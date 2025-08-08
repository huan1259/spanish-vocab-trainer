export function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl shadow"
    >
      {children}
    </button>
  );
}
