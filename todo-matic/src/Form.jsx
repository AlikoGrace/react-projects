import React, { useState } from "react";
import Task from "./Task";

const Form = ({ onAddTask }) => {
  const [description, setDescription] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, id: Date.now(), checked: false };
    onAddTask(newTask);

    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
