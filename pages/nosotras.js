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
        <Content title="Sobre nosotras">
          <h1> ¿Quiénes somos? </h1>
          <h2>Misión</h2>
          <p>
            Inspirar a mujeres a que crezcan y superen expectativas en sus
            carreras en tecnología.
          </p>
          <h2>Visión</h2>
          <p>
            Un mundo en el que las mujeres tengan cantidad representativa en
            puestos como Technical Executives, fundadoras, VCs y Software
            Engineers.
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
