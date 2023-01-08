import React, { useState } from "react";
import cl from "../styles/main.module.scss";
import MyBtn from "./UI/btn/MyBtn";
import { RiDeleteBin6Line } from "react-icons/ri";

const Tasks = ({tasks, deleteTask}) => {

  return (
    <div className={cl.tasks}>
      {tasks.map((task, index) => (
        <div key={task.id} className={cl.task}>
          <div className={cl.title}>
            <div>
                {index + 1}.
            </div>
            <div>
                {task.title}
            </div>
          </div>
          <MyBtn classes={cl.taskBtn} onClick={() => deleteTask(task)}>
            <RiDeleteBin6Line />
          </MyBtn>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
