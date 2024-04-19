import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './index.css';

function DeleteTodo() {
  const { id } = useParams();
  const [error, setError] = useState(null);

  const handleDelete = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE'
    })
    .then((response) => {
      // Check if response is successful
      if (!response.ok) {
        throw new Error('Failed to delete todo');
      }
      // No need to redirect
    })
    .catch((error) => {
      // Handle error
      setError('Error deleting todo: ' + error.message);
    });
  };

  return (
    <div className="delete-todo-container">
      <h1 className="delete-todo-heading">Delete Task</h1>
      <button onClick={handleDelete} className="delete-icon">Delete</button>
      {error && <p className="error">{error}</p>}
      {/* Link to go back to home page */}
      <Link to="/" className="link">Back to Home</Link>
    </div>
  );
}

export default DeleteTodo;
