import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleAdd = () => {
    // Check if title is empty
    if (!title.trim()) {
      setError('Title cannot be empty');
      return;
    }

    fetch('https://todo-backend-c987.onrender.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error('Failed to add todo');
      }
      // Fetch updated list of todos
      return fetch('https://todo-backend-c987.onrender.com/todos');
    })
    .then((response) => response.json())
    .then((data) => {
      setTitle('');
      setDescription('');
    })
    .catch((error) => {
      // Handle error
      setError('Error adding todo: ' + error.message);
    });
  };

  return (
    <div className="add-todo-container">
      <h1 className="add-todo-heading">Add New Task</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="todo-input"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="todo-input"
      />
      <button onClick={handleAdd} className="todo-button">Add Task</button>
      {error && <p className="error">{error}</p>}
      {/* Use Link to navigate to home page */}
      <Link to="/" className="link">Back to Home</Link>
    </div>
  );
}

export default AddTodo;
