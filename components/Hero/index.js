import React from "react";
import style from "./style.scss";

class Hero extends React.Component {
  render() {
    return (
      <div className={style.column}>
        <div className={style.heroDescription}>
          <span>{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default Hero;
