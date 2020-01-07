import React from 'react'
import Title from '../../title'

function Header({ path }) {
  return (
      <header>
        <Title path={path} />
      </header>
  )
}

export default Header
