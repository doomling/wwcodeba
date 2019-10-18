import React from "react";
import style from "./style.scss";

class Section extends React.Component {
  render() {
    return (
      <section className={style.sectionContainer}>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
