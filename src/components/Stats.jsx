function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numOfPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numOfPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go✈️"
          : ` 🧳You have ${numItems} items on your list, and you already packed
        ${numOfPacked} (${percent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
