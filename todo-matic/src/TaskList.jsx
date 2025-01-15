import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onEditTask }) => {
  return (
    <div>
      <h2 id="list-heading">{tasks.length} tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
