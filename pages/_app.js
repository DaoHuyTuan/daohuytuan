import App from "next/app";
import React, { useContext } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "styled-components";
import { ThemeContext, ThemeControlProvider } from "../contexts/theme/reducer";
import GlobalStyle from "../theme/globalStyle";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeControlProvider>
          <Roots Components={Component} pageProps={pageProps} />
        </ThemeControlProvider>
      </>
    );
  }
}
export const Roots = React.memo(props => {
  const { stateTheme } = useContext(ThemeContext);
  const { Components, pageProps } = props;
  return (
    <ThemeProvider theme={{ stateTheme }}>
      <GlobalStyle />
      <Components {...pageProps}>
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </Components>
    </ThemeProvider>
  );
});
export default MyApp;
