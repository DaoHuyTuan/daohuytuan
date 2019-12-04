import React from "react";
import { Link } from "gatsby";
import { MenuWrapper,MenuItem } from "./Menu.style";
const Menu = React.memo(({...props}) => {
    return (
        <MenuWrapper>
            <MenuItem><Link to="/">Blog</Link></MenuItem>
            <MenuItem><Link to="./about">About</Link></MenuItem>
            <MenuItem><a href="https://app.daohuytuan.com" target="_blank">App</a></MenuItem>
        </MenuWrapper>
    )
})

export default Menu;