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
  const [addTaskInputVal, setAddTaskInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const addTask = () => {
    const newTask = {
      id: Date.now(),
      title: addTaskInputVal,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
    setAddTaskInputVal('');
    console.log(tasks)
  };
  const onAddTaskInputChange = e => {
    setAddTaskInputVal(e.target.value);
  };

  const toggleTask = id => {
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
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
          <Bar
            handleSubmit={handleSubmit}
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            addTaskInputVal={addTaskInputVal}
            onAddTaskInputChange={onAddTaskInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
