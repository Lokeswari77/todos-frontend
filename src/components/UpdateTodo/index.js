import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

function UpdateTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://todo-backend-c987.onrender.com/todos/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setDescription(data.description);
      })
      .catch((error) => console.error('Error fetching todo:', error));
  }, [id]);

  const handleUpdate = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description }),
    })
    .then(response => {
      if (response.ok) {
        // If the update was successful, update the state with the new todo details
        setTitle(title);
        setDescription(description);
      } else {
        throw new Error('Failed to update todo');
      }
    })
    .catch((error) => console.error('Error updating todo:', error));
  };
  
  

  return (
    <div className="update-todo-container">
      <h1 className="update-todo-heading">Update Task</h1>
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
      <button onClick={handleUpdate} className="todo-button">Save</button>
      {/* Link to go back to home page */}
      <Link to="/" className="link">Back to Home</Link>
    </div>
  );
}

export default UpdateTodo;
