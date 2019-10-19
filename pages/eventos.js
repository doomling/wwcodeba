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
        <Content title="Próximos eventos">
          <h1> Próximos eventos </h1>
          <p>
            Mantenete al tanto de nuestros Próximos eventos ingresando a{" "}
            <a href="https://www.meetup.com/Women-Who-Code-Buenos-Aires/">
              Meetup
            </a>
          </p>
        </Content>
      </div>
    );
  }
}

export default Index;
