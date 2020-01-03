import React from "react"
import { Link } from "gatsby"
import { MenuWrapper, MenuItem, MenuList, MenuTitle } from "./Menu.style"
const Menu = React.memo(({ ...props }) => {
  const { pathname } = props.location || ""
  return (
    <MenuWrapper>
      <MenuTitle>
        <Link to="/">
          <span>ppdusv</span>
        </Link>
      </MenuTitle>
      <MenuList>
        <MenuItem
          ischecked={
            pathname.includes("blog") || pathname === "/" ? true : false
          }
        >
          <Link to="/">Blog</Link>
        </MenuItem>
        <MenuItem ischecked={pathname === "/about" ? true : false}>
          <Link to="/about">About</Link>
        </MenuItem>
        <MenuItem ischecked={pathname === "/life" ? true : false}>
          <Link to="/life">Life</Link>
        </MenuItem>
        <MenuItem>
          <a href="/rss.xml" target="_blank">
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
      </MenuList>
    </MenuWrapper>
  )
})

export default Menu