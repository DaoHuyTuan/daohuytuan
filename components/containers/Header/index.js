import React, { useState, useCallback } from "react";
import Menu from "../Menu";
import Logo from "../../atoms/Logo";
import Drawer from "../Drawer";
import { HeaderWrapper } from "./Header.style";
import HambugerMenu from "../../atoms/HambugerMenu";
import IconSVG from "../../atoms/IconSVG";
import nightIcon from "../../../public/static/icons/night.svg";
import dayIcon from "../../../public/static/icons/sun.svg";
import { MenuGroup, MenuWrapperMobile } from "../Menu/Menu.style";
import { menuList } from "../Menu/menu";
import Link from "next/Link";
import Label from "../../atoms/Label";
function Header() {
  const ref = React.createRef;
  const regex = "http";
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState({ theme: false, content: nightIcon });
  const onToggleDrawer = () => {
    setIsOpen(prevState => ({
      ...prevState,
      isOpen: !prevState.isOpen
    }));
  };
  const onChangeTheme = useCallback(() => {
    setTheme(prevState => ({
      ...prevState,
      theme: !prevState.theme,
      content: prevState.theme ? dayIcon : nightIcon
    }));
  });
  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen}>
        <MenuWrapperMobile>
          {menuList.map(item => {
            return item.url.includes(regex) ? (
              <Label
                ref={ref}
                label={item.name}
                href={item.url}
                key={item.id}
                type="linkMobile"
              />
            ) : (
              <Link href={item.url} key={item.id}>
                <Label ref={ref} label={item.name} type="linkMobile" />
              </Link>
            );
          })}
        </MenuWrapperMobile>
      </Drawer>
      <HambugerMenu onToggle={onToggleDrawer} />
      <Logo />
      <MenuGroup>
        <Menu />
        <IconSVG
          content={theme.content}
          alt="theme"
          handleChange={onChangeTheme}
        />
      </MenuGroup>
    </HeaderWrapper>
  );
}

export default Header;
