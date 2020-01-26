import React from "react";
import { HambugerMenuWrapper } from "./HambugerMenu.style";
import IconSVG from "../IconSVG";
import hambugerMenu from "../../../public/static/icons/hambuger-menu.svg";
const HambugerMenu = React.memo(props => {
  return (
    <HambugerMenuWrapper onClick={props.onToggle}>
      <IconSVG content={hambugerMenu} name="hambuger-menu" />
    </HambugerMenuWrapper>
  );
});
export default HambugerMenu;
