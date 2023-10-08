// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} text={todo} onDelete={() => deleteTodo(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
