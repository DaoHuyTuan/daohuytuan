import React, { useCallback, useReducer, useEffect } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import { DrawerWrapper, DrawerMask, DrawerContent } from "./Drawer.style";
import drawerReducer from "./reducer";
import { actionTypes } from "./actionType";
export default function Drawer({ children, isOpen, classOption }) {
  let initState;
  if (classOption) {
    initState = classOption;
  } else {
    initState = {
      rootClss: ["drawer"],
      maskClss: ["drawer-mask"],
      contentClss: ["drawer-content"]
    };
  }
  const [current, dispatchCurrent] = useReducer(drawerReducer, initState);
  useEffect(() => {
    if (isOpen) {
      dispatchCurrent({ type: actionTypes.ON_OPEN });
    } else {
      dispatchCurrent({ type: actionTypes.ON_CLOSE });
    }
  }, [isOpen]);
  return (
    <React.Fragment>
      <ClientOnlyPortal selector="#drawer">
        <DrawerWrapper
          isOpen={current.isOpen}
          className={current.rootClss.join(" ")}
        >
          <DrawerMask
            isOpen={current.isOpen}
            className={current.maskClss.join(" ")}
            onClick={() => dispatchCurrent({ type: actionTypes.ON_CLOSE })}
          />
          <DrawerContent className={current.contentClss.join(" ")}>
            {children}
          </DrawerContent>
        </DrawerWrapper>
      </ClientOnlyPortal>
    </React.Fragment>
  );
}
