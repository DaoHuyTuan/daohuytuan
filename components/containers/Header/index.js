import React from "react";
import Menu from "../Menu";
import Logo from "../../atoms/Logo";
import { HeaderWrapper } from "./Header.style";
function Header() {
  return (
    <HeaderWrapper>
      <Logo />
      <Menu />
    </HeaderWrapper>
  );
}

export default Header;
