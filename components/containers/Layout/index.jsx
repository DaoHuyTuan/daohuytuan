import React from "react";
import Header from "../Header";
const Layout = React.memo(props => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
});
export default Layout;
