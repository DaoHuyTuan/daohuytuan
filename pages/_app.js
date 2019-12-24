import App, { Container } from "next/app";
// import { LocaleProvider } from "antd";
// import "antd/dist/antd.min.css";
// import "react-image-gallery/styles/css/image-gallery.css";
// import { IntlProvider } from "react-intl";
// import { ThemeProvider } from "styled-components";
// import themes from "../themes/themes";
// import AppLocale from "../translations/index";
// import GlobalStyles from "hotel/hotel/assets/style/Global.style";
import Layout from "../components/containers/Layout";
// import AuthProvider from "../context/AuthProvider";
// import { SearchProvider } from "../context/SearchProvider";
// import { withData } from "../helpers/restriction";

// const currentAppLocale = AppLocale["en"];

class HotelCustomApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      currentSelectedTheme: "defaultTheme"
      //   currentSelectedLanguage: currentAppLocale
    };
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    const { query, pathname } = ctx;

    // const { user, isLoggedIn } = withData(ctx);
    return { pageProps, query, pathname };
  }
  handleOnChangeTheme = themeName => {
    this.setState({
      currentSelectedTheme: themeName
    });
  };

  //   handleOnChangeLanguage = language => {
  //     const selectedLanguage = AppLocale[language.locale];
  //     this.setState({
  //       currentSelectedLanguage: selectedLanguage
  //     });
  //   };
  render() {
    const { Component, pageProps, query } = this.props;
    const { currentSelectedTheme } = this.state;
    console.log(pageProps);
    return (
      <Container>
        <Layout>
          <>
            {/* <GlobalStyles /> */}
            <Component {...pageProps} />
          </>
        </Layout>
      </Container>
    );
  }
}

export default HotelCustomApp;
