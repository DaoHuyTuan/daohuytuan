import React, { useCallback, useReducer, useEffect } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import { DrawerWrapper, DrawerMask, DrawerContent } from "./Drawer.style";
import drawerReducer from "./reducer";
import { actionTypes } from "./actionType";
const Drawer = React.memo(({ children, isOpen, classOption, onClose }) => {
  let initState;
  if (classOption) {
    initState = classOption;
  } else {
    initState = {
      isOpen: false,
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
          className={current.rootClss ? current.rootClss.join(" ") : ""}
        >
          <DrawerMask
            isOpen={current.isOpen}
            className={current.maskClss ? current.maskClss.join(" ") : ""}
            onClick={onClose}
          />
          <DrawerContent
            className={current.contentClss ? current.contentClss.join(" ") : ""}
          >
            {children}
          </DrawerContent>
        </DrawerWrapper>
      </ClientOnlyPortal>
    </React.Fragment>
  );
});
export default Drawer;
