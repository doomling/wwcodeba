import React from "react";
import style from "./style.scss";

class Hero extends React.Component {
  render() {
    return <div className={style.columnContainer}>{this.props.children}</div>;
  }
}

export default Hero;
