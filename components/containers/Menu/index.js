import React from "react";
import { MenuWrapper } from "./Menu.style";
import Label from "../../atoms/Label";
import { menuList } from "../Menu/menu";
import Link from "next/Link";
const Menu = React.memo(props => {
  const ref = React.createRef;
  const regex = "http";
  return (
    <MenuWrapper>
      {menuList.map(item => {
        return item.url.includes(regex) ? (
          <Label
            ref={ref}
            label={item.name}
            href={item.url}
            key={item.id}
            type="link"
          />
        ) : (
          <Link href={item.url} key={item.id}>
            <Label ref={ref} label={item.name} type="link" />
          </Link>
        );
      })}
    </MenuWrapper>
  );
});
export default Menu;
