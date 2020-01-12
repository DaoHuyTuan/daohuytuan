import App from "next/app";
import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyle";
const theme = {
  colors: {
    primary: "#0070f3"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps}>
            <Html lang="en">
              <Head />
              <body>
                <Main />
                <NextScript />
              </body>
            </Html>
          </Component>
        </ThemeProvider>
      </>
    );
  }
}
