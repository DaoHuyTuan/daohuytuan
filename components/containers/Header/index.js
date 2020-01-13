import React, { useState, useCallback } from "react";
import { withRouter } from "next/router";
import Link from "next/Link";
import { menuList } from "../Menu/menu";
import Menu from "../Menu";
import Drawer from "../Drawer";
import Logo from "../../atoms/Logo";
import Label from "../../atoms/Label";
import IconSVG from "../../atoms/IconSVG";
import HambugerMenu from "../../atoms/HambugerMenu";
import nightIcon from "../../../public/static/icons/night.svg";
import dayIcon from "../../../public/static/icons/sun.svg";
import closeIcon from "../../../public/static/icons/close.svg";
import { HeaderWrapper } from "./Header.style";
import { MenuGroup, MenuWrapperMobile,MenuHeaderMobile } from "../Menu/Menu.style";
const  Header = React.memo(({ router }) => {
  const ref = React.createRef;
  const regex = "http";
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState({ theme: false, content: nightIcon });
  const onToggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };
  const onChangeTheme = useCallback(() => {
    setTheme(prevState => ({
      ...prevState,
      theme: !prevState.theme,
      content: prevState.theme ? dayIcon : nightIcon
    }));
  });
  const handleActiveClass = useCallback((url, regex) => {
    let result;
    const pathBlogs = "/posts";
    if(router.pathname.includes(pathBlogs) && name === "Blogs") {
      result = "drawer-active";
    } else {
      if(router.pathname === url) {
        result = "drawer-active";
      } else {
        result = ""
      }
    }
    
    return result;
  })
  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen} onClose={onToggleDrawer}>
        <MenuWrapperMobile>
          <MenuHeaderMobile>
            <Logo />
            <IconSVG content={closeIcon} alt="close" handleChange={onToggleDrawer}/>
          </MenuHeaderMobile>
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
                <Label ref={ref} label={item.name} type="linkMobile" activeClass={handleActiveClass(item.url, item.regex)}/>
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
})

export default withRouter(Header);
