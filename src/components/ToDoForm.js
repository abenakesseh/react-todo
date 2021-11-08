import React, { useState, useEffect, useRef } from 'react';

function ToDoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  //focus cursor in textbox
  const inputFocus = useRef(null);

  useEffect(() => {
    inputFocus.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput('');
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your task"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputFocus}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a To-Do"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputFocus}
          />
          <button className="todo-button">Add To-do</button>
        </>
      )}
    </form>
  );
}

export default ToDoForm;
