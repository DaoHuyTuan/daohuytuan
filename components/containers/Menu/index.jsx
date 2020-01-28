import React, { useCallback } from "react";
import { MenuWrapper } from "./Menu.style";
import Label from "../../atoms/Label";
import { menuList, handleActiveClass } from "./menu";
import Link from "next/link";
import { withRouter } from "next/router";
const Menu = React.memo(({ router }) => {
  const ref = React.createRef;
  const regex = "http";
  const onHandleActiveClass = useCallback(regex => {
    const result = handleActiveClass(router.pathname, regex);
    return result;
  });
  return (
    <MenuWrapper>
      <Link href="/">
        <Label
          ref={ref}
          label="Blogs"
          type="link"
          activeClass={router.pathname === "/" ? "drawer-active" : ""}
        />
      </Link>
      <Link href="/about">
        <Label
          ref={ref}
          label="About"
          type="link"
          activeClass={router.pathname === "/about" ? "drawer-active" : ""}
        />
      </Link>
      <Link href="/life">
        <Label
          ref={ref}
          label="Life"
          type="link"
          activeClass={router.pathname === "/life" ? "drawer-active" : ""}
        />
      </Link>
    </MenuWrapper>
  );
});
export default withRouter(Menu);
