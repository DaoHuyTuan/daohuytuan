import React from "react";
import Header from "../Header";
const Layout = React.memo(props => {
  return (
    <>
      <Header onChangeTheme={props.onChangeTheme} />
      {props.children}
    </>
  );
});
export default Layout;
