// src/components/AddTodo.js
import React, { useState } from 'react';

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default AddTodo;
