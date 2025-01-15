import { useState } from "react";
import "./App.css";
import Filters from "./Filters";
import Form from "./Form";
import TaskList from "./TaskList";

function App(props) {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((item) => item.id != id));
  }

  function handleEditTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form onAddTask={handleAddTask} />
      <Filters />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
