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
        <Content title="Voluntarias">
          <h1> ¿Querés ser voluntaria? </h1>
          <p>En este momento nos encontramos buscando los siguientes roles:</p>
          <p>
            <li>
              <b>Tech Leads</b> - Buscamos personas que quieran ayudarnos en la
              organización de eventos en su área de experiencia. Ejemplos iOS,
              Front End, Back End, QA, UX
            </li>
            <li>
              <b>Evangelist</b> - Ayudar a dar a conocer WWC en las redes y
              dentro de empresas. Conectar con participantes en los eventos que
              realicemos.
            </li>
            <li>
              <b>General Volunteer</b> - Ayudar en eventos, charlar con los
              participantes, dar una mano en tareas generales{" "}
            </li>
          </p>
          <p>
            Si te interesa participar podés contactarnos a{" "}
            <b>buenosaires@womenwhocode.com</b> o completá el siguiente{" "}
            <a
              href="https://docs.google.com/forms/d/1qDAQg_pdvFV3q6Z_te0Rss0u1Nh9IPyK-_7sbBcxXL8"
              target="_blank"
            >
              formulario
            </a>
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
