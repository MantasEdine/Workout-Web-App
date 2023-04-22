import React from "react";

import style from "./Nav.module.css";
const Nav = () => {
  return (
    <div>
      <div className={style.navdiv}>
        <h1 className={style.logo}>Gym Buddy</h1>
      </div>
    </div>
  );
};

export default Nav;
