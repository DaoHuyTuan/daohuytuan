import React from 'react'
import Header from '../containers/Header'
import Head from '../head'
import Container from '../containers/Container'

function Layout({ path, children, pageTitle, ogImage }) {
  return (
    <Container>
      <Head title={pageTitle} ogImage={ogImage} />
      <Header path={path} />
      <main>{children}</main>
    </Container>
  )
}

export default Layout
