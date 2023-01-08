import React from "react";
import cl from "./MyBtn.module.scss";

const MyBtn = ({ children, classes, ...props }) => {

  return (
    <button className={cl.btn + ' ' + classes} {...props}>
      {children}
    </button>
  );
};

export default MyBtn;
