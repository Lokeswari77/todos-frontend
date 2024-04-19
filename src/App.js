import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddTodo from './components/AddTodo';
import DeleteTodo from './components/DeleteTodo';
import DisplayAllTodos from './components/DisplayAllTodos';
import UpdateTodo from './components/UpdateTodo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DisplayAllTodos />} />
      <Route path="/add" element={<AddTodo />} />
      <Route path="/delete/:id" element={<DeleteTodo />} />
      <Route path="/update/:id" element={<UpdateTodo />} />
    </Routes>
  )
}

export default App;
