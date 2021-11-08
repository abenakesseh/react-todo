import React from 'react';
import './style.css';
import ToDoList from './components/ToDoList';

export default function App() {
  return (
    <div className="todo-app">
      <ToDoList />
    </div>
  );
}
