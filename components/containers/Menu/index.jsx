import React from "react";
import Label from "../../atoms/Label/index";
import { listMenu } from "./menu";

const Menu = React.memo(props => {
  return (
    <div className="menu">
      {/* {listMenu.map((item, index) => {
        return;
      })} */}
      <Label>Hello</Label>
    </div>
  );
});
export default Menu;
