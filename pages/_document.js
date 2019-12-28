import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  constructor(props) {
    super(props);
  }
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <title>Hy tứng's Blog</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Dao Huy Tuan's personal blog" />
          <meta name="keywords" content="Web Developer, Front End, ReactJS," />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,700,800,900&display=swap&subset=vietnamese"
            rel="stylesheet"
            type="text/css"
          />
          {/* <link rel="icon" href={favicon} type="image/png" sizes="16x16" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
