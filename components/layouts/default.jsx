import React from 'react'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../containers/Header'))
const Head = dynamic(() => import('../head'))
const Container = dynamic(() => import('../containers/Container'))

const Layout = React.memo(({ path, children, pageTitle, ogImage }) => {
  return (
    <Container>
      <Head title={pageTitle} ogImage={ogImage} />
      <Header path={path} />
      <main>{children}</main>
    </Container>
  )
})

export default Layout
