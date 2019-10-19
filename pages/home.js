import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Section from "./../components/Section";
import Content from "./../components/Content";
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
        <Content title="Bienvenidas">
          <h1> Somos Women Who Code Buenos Aires </h1>
          <p>
            Potenciamos carreras de mujeres en tecnología acercandolas a los
            recursos necesarios para mejorar sus habilidades, generar
            oportunidades de liderazgo y avanzar sus carreras.
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
