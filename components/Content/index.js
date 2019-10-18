import React from "react";
import style from "./style.scss";
import Hero from "./../Hero";

class Content extends React.Component {
  render() {
    return (
      <section className={style.contentContainer}>
        <Hero title={this.props.title} />
        <div className={style.contentBox}>{this.props.children}</div>
      </section>
    );
  }
}

export default Content;
