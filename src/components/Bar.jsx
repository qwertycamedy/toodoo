import React, { useState } from "react";
import cl from "../styles/bar.module.scss";
import { BiSortAZ, BiSearch, BiAddToQueue } from "react-icons/bi";
import MyBtn from "./UI/btn/MyBtn";

const Bar = () => {
  const [btns, setBtns] = useState([
    {
      id: 1,
      img: <BiSearch />,
    },
    {
      id: 2,
      img: <BiAddToQueue />,
    },
    {
      id: 3,
      img: <BiSortAZ />,
    },
  ]);

  return (
    <div className={cl.bar}>
      {btns.map(btn => (
        <MyBtn classes="barBtn" key={btn.id}>
          {btn.img}
        </MyBtn>
      ))}
    </div>
  );
};

export default Bar;
