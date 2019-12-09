import React from "react"
import Menu from "./Menu"
import { rhythm } from "../utils/typography"
import GlobalStyle from "../theme/GlobalStyle"
class Layout extends React.Component {
  render() {
    const { location, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Menu location={location} />
        {children}
        <GlobalStyle />
      </div>
    )
  }
}

export default Layout
