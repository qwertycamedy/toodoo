import React from "react";
import cl from "../../styles/tasks.module.scss";
import Task from "./Task";

const Tasks = ({tasks, toggleTodo, deleteTask}) => {
  return (
    <div className={cl.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTodo={toggleTodo} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default Tasks;
