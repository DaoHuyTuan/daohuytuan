import React, { useState, useCallback, useContext } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { menuList, handleActiveClass } from "../Menu/menu";
import Menu from "../Menu";
import Drawer from "../Drawer";
import Logo from "../../atoms/Logo";
import Label from "../../atoms/Label";
import IconSVG from "../../atoms/IconSVG";
import HambugerMenu from "../../atoms/HambugerMenu";
import searchIcon from "../../../public/static/icons/search.svg";
import closeIcon from "../../../public/static/icons/close.svg";
import { HeaderWrapper } from "./Header.style";
// import { ThemeContext } from "../../../contexts/theme/reducer";
import {
  MenuGroup,
  MenuWrapperMobile,
  MenuHeaderMobile
} from "../Menu/Menu.style";
const Header = React.memo(({ router }) => {
  const ref = React.createRef;
  const regex = "http";
  const [isOpen, setIsOpen] = useState(false);
  // const { dispatch } = useContext(ThemeContext);
  // const [theme, setTheme] = useState({ theme: false, content: nightIcon });
  const onToggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState);
  });
  // const onChangeTheme = useCallback(() => {
  //   dispatch({ type: "TOGGLE" });
  //   setTheme(prevState => ({
  //     ...prevState,
  //     theme: !prevState.theme,
  //     content: !prevState.theme ? dayIcon : nightIcon
  //   }));
  // });
  const onHandleActiveClass = useCallback(regex => {
    const result = handleActiveClass(router.pathname, regex);
    return result;
  });
  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen} onClose={onToggleDrawer}>
        <MenuWrapperMobile>
          <MenuHeaderMobile>
            <Link href="/">
              <Logo />
            </Link>
            <IconSVG
              content={closeIcon}
              alt="close"
              handleChange={onToggleDrawer}
            />
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
                <Label
                  ref={ref}
                  label={item.name}
                  type="linkMobile"
                  onClick={onToggleDrawer}
                  activeClass={onHandleActiveClass(item.regex)}
                />
              </Link>
            );
          })}
        </MenuWrapperMobile>
      </Drawer>
      <HambugerMenu onToggle={onToggleDrawer} />
      <Link href="/">
        <Logo />
      </Link>
      <MenuGroup>
        <Menu />
        <IconSVG content={searchIcon} alt="search" />
      </MenuGroup>
    </HeaderWrapper>
  );
});

export default withRouter(Header);
