import React from "react";
import { menuList } from "./menu"
const Menu = React.memo(props => {
    return (
        <ul>
            {menuList.map((item, index) => {
                return <a key={index} href={item.url}><li>{item.name}</li></a>
            })}
        </ul>
    )
})

export default Menu;