
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { load, save } from "../utils/storage";

function TaskBoard() {

  const [tasks, setTasks] = useState(() => load("tasks"));

  useEffect(() => {
    save("tasks", tasks);
  }, [tasks]);

  const addTask = () => {
    const name = prompt("Enter task name");
    if (!name) return;

    const newTask = {
      id: Date.now(),
      name: name,
      priority: "medium",
      timeFrom: "09:00",
      timeTo: "10:00"
    };

    setTasks([...tasks, newTask]);
  };

  const markComplete = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <>
      <Navbar role="User" />

      <div className="container mt-4">

        <button className="btn btn-primary mb-3" onClick={addTask}>
          Add Task
        </button>

        <div className="row">
          {tasks.map(task => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={markComplete}
            />
          ))}
        </div>

      </div>
    </>
  );
}

export default TaskBoard;
