import React from "react";
import style from "./style.scss";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.logo}>
          <img src="/static/img/wwcode.svg" alt="logo wwocode" />
        </div>
      </div>
    );
  }
}

export default Header;
