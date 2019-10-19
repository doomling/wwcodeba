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
        <Content title="Beneficios para participantes">
          <h1> Beneficios de unirse </h1>
          <h2>Becas actuales</h2>
          <p>
            Para aplicar a los beneficios de la comunidad global, inscribite en{" "}
            <a href="https://www.womenwhocode.com/buenosaires" target="_blank">
              Women Who Code
            </a>{" "}
            e ingresá a <b>scholarship</b>.
          </p>
          <p>También podés mantenerte al día suscribiendote al newletter </p>
        </Content>
      </div>
    );
  }
}

export default Index;
