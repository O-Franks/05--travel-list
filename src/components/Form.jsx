import { useState } from "react";

function Form({ onAddItems }) {
  const [data, setData] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!data) return;

    const newItem = { data, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setData("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

export default Form;
