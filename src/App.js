import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import "./index.css";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want delete all items? "
    );
    if (confirmed) {
      setItems([]);
    } else {
      return;
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onDelete={handleDelete}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
