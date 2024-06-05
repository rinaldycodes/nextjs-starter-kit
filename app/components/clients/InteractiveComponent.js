"use client";

import { useState } from 'react';

export default function InteractiveComponent({ initialData }) {
  const [data, setData] = useState(initialData);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    const newItem = { id: data.length + 1, title: inputValue };
    setData([...data, newItem]);
    setInputValue('');
  };

  return (
    <div>
      <h1>Interactive Component</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}
