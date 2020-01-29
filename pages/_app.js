import App from "next/app";
import React, { useContext } from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "styled-components";
import { ThemeContext, ThemeControlProvider } from "../contexts/theme/reducer";
import GlobalStyle from "../theme/globalStyle";
import Layout from "../components/layouts/default";
import HeadTag from "../components/head";

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
      <Layout>
        <Components {...pageProps}>
          <Html lang="en">
            <Head>
              <HeadTag />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        </Components>
      </Layout>
    </ThemeProvider>
  );
});
export default MyApp;
