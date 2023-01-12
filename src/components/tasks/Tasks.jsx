import React from "react";
import cl from "../../styles/tasks.module.scss";
import Task from "./Task";

const Tasks = ({tasks, toggleTask, deleteTask}) => {
  return (
    <div className={cl.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
