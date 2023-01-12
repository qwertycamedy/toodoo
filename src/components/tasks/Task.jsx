import React from "react";
import cl from "../../styles/tasks.module.scss";
import MyBtn from "../UI/btn/MyBtn";
import { RiDeleteBin6Line } from "react-icons/ri";
import MyCheck from "../UI/check/MyCheck";

const Task = ({task, toggleTask, deleteTask}) => {
  return (
    <label className={`${task.isDone ? cl.task + ' ' + cl.done : cl.task}`}>
      <span className={cl.title}>
        <MyCheck defaultChecked={task.isDone} onChange={() => toggleTask(task.id)} />
        <span>{task.title}</span>
      </span>
      <MyBtn classes={cl.taskBtn} onClick={() => deleteTask(task)}>
        <RiDeleteBin6Line />
      </MyBtn>
    </label>
  );
};

export default Task;
