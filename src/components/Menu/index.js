import React from "react"
import { Link } from "gatsby"
import { MenuWrapper, MenuItem } from "./Menu.style"
const Menu = React.memo(({ ...props }) => {
  const listStyleActive = {
    boxShadow: "0 2px 0 0 #f96969",
  }
  return (
    <MenuWrapper>
      <MenuItem>
        <Link to="/" activeStyle={listStyleActive}>
          Blog
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/about" activeStyle={listStyleActive}>
          About
        </Link>
      </MenuItem>
      <MenuItem>
        <a href="./rss.xml" target="_blank">
          Rss
        </a>
      </MenuItem>
      <MenuItem>
        <a
          href="https://app.daohuytuan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          App
        </a>
      </MenuItem>
    </MenuWrapper>
  )
})

export default Menu
