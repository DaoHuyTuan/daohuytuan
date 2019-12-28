import React from "react";
import App, { Container } from "next/app";
import GlobalStyles from "../themes/Global.style";
import Layout from "../components/containers/Layout";
import { ThemeProvider } from "styled-components";
import theme from "../themes/color";
class HotelCustomApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      theme: false
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { query, pathname } = ctx;
    return { pageProps, query, pathname };
  }
  handleOnChangeTheme = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        theme: !prevState.theme
      };
    });
  };

  render() {
    const { Component, pageProps, query } = this.props;
    let themeProvider = this.state.theme ? theme.dark : theme.light;
    return (
      <ThemeProvider theme={themeProvider}>
        <Container>
          <div className="main">
            <Layout onChangeTheme={this.handleOnChangeTheme}>
              <>
                <GlobalStyles />
                <Component {...pageProps} />
              </>
            </Layout>
          </div>
        </Container>
      </ThemeProvider>
    );
  }
}

export default HotelCustomApp;
