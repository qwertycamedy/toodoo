import React, { useState } from "react";
import cl from "../../styles/bar.module.scss";
import { BiSortAZ, BiSearch, BiAddToQueue } from "react-icons/bi";
import MyBtn from "../UI/btn/MyBtn";
import MyInput from "../UI/input/MyInput";

const Bar = ({ addTask, addTaskInputVal, onAddTaskInputChange, handleSubmit }) => {
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
  const [modals, setModals] = useState([
    {
      id: 1,
      isShow: false,
    },
    {
      id: 2,
      isShow: false,
    },
    {
      id: 3,
      isShow: false,
    },
  ]);

  // const onBtnClick = () => {
  //   setBtns(
  //     btns.map(btn => {
  //       if (btn.id === 2) {
  //         setModals(
  //           modals.map(modal => {
  //             if (modal.id === 2) {
  //               modal.isShow = !modal.isShow;
  //             }
  //             return modal;
  //           })
  //         );
  //       }
  //       return btn;
  //     })
  //   );
  // };

  return (
    <div className={cl.bar}>
      {/* {btns.map(btn => (
        <MyBtn classes="barBtn" key={btn.id} onBtnClick={onBtnClick}>
          {btn.img}
        </MyBtn>
      ))} */}

      <div className="modals">
        <form className="modal" onSubmit={handleSubmit}>
          <MyInput
            placeholder="Type TooDoo here.."
            value={addTaskInputVal}
            onChange={onAddTaskInputChange}
          />
          <MyBtn classes="barBtn" 
          onClick={addTask}
          >
            <BiAddToQueue />
          </MyBtn>
        </form>
      </div>
    </div>
  );
};

export default Bar;
