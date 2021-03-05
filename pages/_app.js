import App from 'next/app'
import React, { useContext } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { ThemeProvider } from 'styled-components'
import { ThemeContext, ThemeControlProvider } from '../contexts/theme/reducer'
import Layout from '../components/layouts/default'
import HeadTag from '../components/head'
import { posts } from '../posts/index'
import { withRouter } from 'next/router'
import GlobalStyle from '../theme/globalStyle'
class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    const { pathname } = router
    const title = pathname.replace(/(\/posts\/)/, '')

    const currentTitle = posts.filter(item => item.path === pathname)
    return (
      <>
        <ThemeControlProvider>
          <Roots
            Components={Component}
            pageProps={pageProps}
            pageTitle={
              currentTitle && currentTitle.length ? currentTitle[0].title : "Hy tứng's blogs"
            }
          />
        </ThemeControlProvider>
      </>
    )
  }
}
export const Roots = React.memo(props => {
  const { stateTheme } = useContext(ThemeContext)
  const { Components, pageProps, pageTitle } = props
  return (
    <ThemeProvider theme={{ stateTheme }}>
      <GlobalStyle />
      <Layout pageTitle={pageTitle}>
        <Components {...pageProps} theme={{ ...stateTheme }}>
          <Html lang='en'>
            <Head title='Dao Huy Tuan'>
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
  )
})
export default withRouter(MyApp)
