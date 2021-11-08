import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

function ToDoList() {
  const [todos, setTodos] = useState([]);

  //add a new todo item
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  //update todo item
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  //remove item
  const removeToDo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  //complete item
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todos;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the plan for today?</h1>
      <ToDoForm onSubmit={addTodo} />
      <ToDo
        todos={todos}
        completeTodo={completeTodo}
        removeToDo={removeToDo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default ToDoList;
