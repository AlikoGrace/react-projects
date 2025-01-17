import React, { useState } from "react";

const Task = ({ task, onDeleteTask, onEditTask, onToggleTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);

  function handleEdit() {
    if (isEditing) {
      // Save the changes
      onEditTask({ ...task, description: newDescription });
    }
    setIsEditing(!isEditing);
  }

  function handleToggleCheckbox() {
    onToggleTask({ ...task, checked: !task.checked });
  }

  return (
    <>
      <li className="todo stack-small">
        <div className="c-cb">
          <input
            id={`todo-${task.id}`}
            type="checkbox"
            checked={task.checked}
            onChange={{ handleToggleCheckbox }}
          />
          <label className="todo-label" htmlFor={`todo-${task.id}`}>
            {isEditing ? (
              <input
                type="text"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            ) : (
              task.description
            )}
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn" onClick={handleEdit}>
            {isEditing ? "Save" : "Edit"}{" "}
            <span className="visually-hidden">{task.description}</span>
          </button>
          <button
            type="button"
            className="btn btn__danger "
            onClick={() => onDeleteTask(task.id)}
          >
            Delete <span className="visually-hidden">{task.description}</span>
          </button>
        </div>
      </li>
    </>
  );
};

export default Task;
