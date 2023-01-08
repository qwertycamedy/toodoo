import React, { useState } from "react";
import Bar from "../components/Bar";
import Tasks from "../components/Tasks";
import cl from "../styles/main.module.scss";

const Main = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "DayToDay",
      task1: "",
      task2: "",
      task3: "",
    },
    {
      id: 2,
      title: "Hello World",
      task1: "",
      task2: "",
      task3: "",
    },
    {
      id: 3,
      title: "GYMMMMMMMMMMMMMMM",
      task1: "",
      task2: "",
      task3: "",
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
  const deleteTask = task => {
    setTasks(tasks.filter(t => t !== task));
  };

  return (
    <div className={cl.main}>
      <div className="container">
        <div className={cl.inner}>
          <Tasks tasks={tasks} deleteTask={deleteTask} />
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
