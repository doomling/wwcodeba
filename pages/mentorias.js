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
          <p>
            El proyecto de mentorías plantea generar un espacio seguro donde
            personas con interés en desarrollar un conocimiento particular
            puedan mantener contacto con profesionales en esa área para resolver
            dudas puntuales y aprender mejores prácticas que se usen
            efectivamente en la industria.
          </p>
          <p>
            La propuesta consiste en ganar conocimientos nuevos o consolidar
            existentes a través de un proyecto que puede ser planteado por el
            mentee o de ser necesario entre ambos participantes. Idealmente
            debería poder realizarse entre uno o dos meses de trabajo y deberá
            obviamente abarcar el tópico a aprender.
          </p>
          <p>
            Para participar como mentor completá el siguiente{" "}
            <a
              href="https://docs.google.com/forms/d/1LwkWqgayS_3SCQqnmAqgmOqP1_QmV2ThVlpRAtNbPBw/"
              target="_blank"
            >
              formulario
            </a>
          </p>
          <h2>Mentees</h2>
          <p>
            Si estás interesada en ser mentoreada contactanos a través de
            nuestro slack, redes o <b>buenosaires@womenwhocode.com</b>
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
