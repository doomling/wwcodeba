import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Content from "../components/Content";
import style from "./style.scss";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Section>
          <Header />
          <NavBar />
        </Section>
        <Content title="Mentorías">
          <h1> ¿Querés participar en nuestro programa de mentorías? </h1>
          <h2>Mentores</h2>
          <p>Cosas</p>
          <h2>Mentees</h2>
          <p>Cosas</p>
        </Content>
      </div>
    );
  }
}

export default Index;
