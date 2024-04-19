import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import './index.css';

function DisplayAllTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://todo-backend-c987.onrender.com/todos')
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div className='bg-container'>
      <h1 className="todo-items-heading">My Tasks</h1>
      <ul className="todo-items-container">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item-container">
            <div className="todo-details">
              <p className="todo-title">{todo.title}</p>
              <p className="todo-description">{todo.description}</p>
            </div>
            <div className="todo-actions">
              <Link to={`/delete/${todo.id}`} className="delete-icon"><FaTrashAlt /></Link>
              <Link to={`/update/${todo.id}`} className="edit-icon"><FaEdit /></Link>
            </div>
          </li>
        ))}
      </ul>
      {/* Add button to redirect to AddTodo component */}
      <Link to="/add" className="add-task-button">Add Task</Link>
    </div>
  );
}

export default DisplayAllTodos;
