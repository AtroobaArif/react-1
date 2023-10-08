// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import React, { useState } from 'react';
import '../styles/styles.css'; // Import CSS from the styles folder
import TodoList from '../components/TodoList.js'; // Import TodoList from the components folder
import AddTodo from '../components/AddTodo.js'; // Import AddTodo from the components folder

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;

