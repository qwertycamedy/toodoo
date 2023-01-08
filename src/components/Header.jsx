import React from "react";
import MyBtn from "./UI/btn/MyBtn";
import { BiUser } from "react-icons/bi";
import cl from "../styles/header.module.scss";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className="container">
        <div className={cl.inner}>
          <h1>TooDoo</h1>
          <MyBtn>
            <BiUser />
          </MyBtn>
        </div>
      </div>
    </header>
  );
};

export default Header;
