import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Section from "../components/Section";
import Content from "../components/Content";
import Hero from "../components/Hero";
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
        <Content title="Información para sponsors">
          <h1> Sponsorship y ayuda monetaria </h1>

          <p>
            Contamos con varias opciones a la hora de recibir donaciones de
            empresas e individuos
          </p>
          <h2> EMPRESAS</h2>
          <p>
            <h3>Company Sponsorship</h3>
            <p>
              Las empresas que estén interesadas en ser sponsors globales de la
              comunidad pueden envíar su solicitud a{" "}
              <b>buenosaires@womenwhocode.com</b>
            </p>
            <h3>Company Membership</h3>
            <p>
              Como empresa pueden ser miembros activos de la comunidad hosteando
              eventos, contratando miembros de la comunidad, incitar a miembros
              de su empresa a que den charlas para la comunidad. Quienes hostean
              eventos y tienen sus HQ en USA pueden aplicar para deducir
              impuestos por ayudar a la comunidad. Link al form que deben llenar
            </p>
            <h3>Job Posting</h3>
            <p>
              Ingresando a{" "}
              <a href="http://womenwhocode.com/companies" target="_blank">
                este sitio
              </a>{" "}
              pueden acceder a postear sus búsquedas laborales activas que
              llegarán a toda la comunidad global de Women Who Code.
            </p>
          </p>
          <h2>Individuos</h2>
          <p>
            Si sos un individuo o una pequeña organización, podés realizar
            donaciones a la network local ingresando a{" "}
            <a
              href="https://opencollective.com/wwcodebuenosaires"
              target="_blank"
            >
              nuestra cuenta de Open Collective
            </a>
            . Existe la opción de hacer una donación única o contribuir
            mensualmente con hasta 100 u$s al mes.
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
