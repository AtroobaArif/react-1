// src/components/TodoItem.js
import React from 'react';

function TodoItem({ text, onDelete }) {
  return (
    <li>
      {text}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
