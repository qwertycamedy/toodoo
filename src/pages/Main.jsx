import React, { useState } from "react";
import Bar from "../components/bar/Bar";
import Tasks from "../components/tasks/Tasks";
import cl from "../styles/main.module.scss";

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "DayToDay",
      isDone: true,
    },
    {
      id: 2,
      title: "Hello World",
      isDone: false,
    },
    {
      id: 3,
      title: "GYMMMMMMMMMMMMMMM",
      isDone: false,
    },
  ]);
  const [input, setInput] = useState("");

  const addTask = () => {
    let task = {
      id: Date.now(),
      title: input,
    };
    setTasks([...tasks], task);
  };
  const onEnterDown = e => {
    if (e.key === "Enter") {
      setInput(e.target.value);
    }
  };
  const toggleTodo = id => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };
  const deleteTask = task => {
    setTasks(tasks.filter(t => t !== task));
  };

  return (
    <div className={cl.main}>
      <div className="container">
        <div className={cl.inner}>
          <Tasks
            tasks={tasks}
            toggleTodo={toggleTodo}
            deleteTask={deleteTask}
          />
          <Bar
            saveTodo={console.warn}
            onEnterDown={onEnterDown}
            addTask={addTask}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
