import React from "react";
import Menu from "../Menu/index";
import { HeaderWrapper, HeaderGroup } from "./Header.style";
const Header = React.memo(props => {
  return (
    <HeaderWrapper>
      <div className="header-logo">
        <span>ppdusv</span>
      </div>
      <HeaderGroup>
        <Menu />
        <button onClick={props.onChangeTheme}>hello</button>
      </HeaderGroup>
    </HeaderWrapper>
  );
});
export default Header;
