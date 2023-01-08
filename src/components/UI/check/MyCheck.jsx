import React from "react";
import cl from "./MyCheck.module.scss";

const MyCheck = props => {
  return (
    <>
      <input className={cl.check} type="checkbox" {...props} />
      <span className={cl.checkStyle}></span>
    </>
  );
};

export default MyCheck;
