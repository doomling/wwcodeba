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
          <h1> Beneficios de unirse a nuestra comunidad </h1>
          <p>
            <li>Recursos gratuitos</li>
            <li>Ser parte de una comunidad global</li>
            <li>Bolsa de trabajo global</li>
            <li>Becas para eventos</li>
            <li>Workshops y charlas técnicas todos los meses</li>
          </p>
          <p>
            Para aplicar a los beneficios de la comunidad global, inscribite en{" "}
            <a href="https://www.womenwhocode.com/buenosaires" target="_blank">
              Women Who Code
            </a>{" "}
            e ingresá a <b>scholarship</b> o mantenete al día suscribiendote a
            nuestro newsletter{" "}
            <a
              href="https://us7.list-manage.com/subscribe?u=e75be710ba1a2eb0df9d82ca4&id=73a7096e5d"
              target="_blank"
            >
              CODE REVIEW
            </a>
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
