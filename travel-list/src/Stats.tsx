export default function Stats({ items }) {
  if (!items.length)
    return <footer className="stats">Start adding items 🚀</footer>;
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage =
    numPacked > 0 ? Math.round((numPacked / numItems) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go  "
          : ` You have ${numItems} items on your list, and you already packed ${numPacked}
           (${percentage}%)`}
      </em>
    </footer>
  );
}
