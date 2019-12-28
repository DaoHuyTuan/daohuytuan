import React from "react";
import Menu from "../Menu/index";
const Header = React.memo(props => {
  return (
    <div className="header">
      <div className="header-logo">
        <span>ppdusv</span>
        <button onClick={props.onChangeTheme}>hello</button>
      </div>
      <Menu />
    </div>
  );
});
export default Header;
