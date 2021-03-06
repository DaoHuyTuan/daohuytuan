import React, { useCallback } from "react";
import { MenuWrapper } from "./Menu.style";
import Label from "Atoms/Label";
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
      {menuList.map(item => {
        return item.url.includes(regex) ? (
          <Label
            ref={ref}
            label={item.name}
            href={item.url}
            key={item.id}
            type="link"
            target="_blank"
          />
        ) : (
          <Link href={item.url} key={item.id}>
            <Label
              ref={ref}
              label={item.name}
              type="link"
              activeClass={onHandleActiveClass(item.regex)}
            />
          </Link>
        );
      })}
    </MenuWrapper>
  );
});
export default withRouter(Menu);
