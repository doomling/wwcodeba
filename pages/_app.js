import App, { Container } from "next/app";
import React from "react";
import withReduxStore from "../lib/with-redux-store";
import { Provider } from "react-redux";
import Router from "next/router";
import Head from "../components/Head";
import "../styles/style.scss";

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
  }

  constructor(props) {
    super(props);
    const { reduxStore, user } = this.props;
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <React.Fragment>
        <Head />
        <Container>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </React.Fragment>
    );
  }
}

export default withReduxStore(MyApp);
