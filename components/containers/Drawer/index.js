import React, { useState,useCallback } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import { DrawerWrapper, DrawerMask, DrawerContent } from "./Drawer.style";
export default function Drawer({ onHandleToggle }) {
  const [open, setOpen] = useState();
  const [clssName, setClssName] = useState(["drawer"]);
  const [clssNameMask, setClssNameMask] = useState(["drawer-mask"]);
  const [clssNameContent, setClssNameContent] = useState(["drawer-content"]);

  const onToggleDrawer = useCallback(param => {
    setOpen(param);
    let cloneClssName = JSON.parse(JSON.stringify(clssName));
    let cloneClssMask = JSON.parse(JSON.stringify(clssNameMask));
    let cloneClssContent = JSON.parse(JSON.stringify(clssNameContent));
    if(param) {
      cloneClssName.push("drawer-open");
      cloneClssMask.push("drawer-open");
      cloneClssContent.push("drawer-open");
      setClssName(cloneClssName);
      setClssNameMask(cloneClssMask);
      setClssNameContent(cloneClssContent);
    } else {
      cloneClssName.splice(cloneClssName.indexOf("drawer-open"), 1);
      cloneClssMask.splice(cloneClssName.indexOf("drawer-open"), 1);
      cloneClssContent.splice(cloneClssName.indexOf("drawer-open"), 1);
      setClssName(cloneClssName);
      setClssNameMask(cloneClssMask);
      setClssNameContent(cloneClssContent);
    }
  })

  return (
    <React.Fragment>
      <button type="button" onClick={event => onToggleDrawer(true)}>
        Open Modal
      </button>
      <ClientOnlyPortal selector="#drawer">
        <DrawerWrapper isOpen={open} className={clssName.join(" ")}>
          <DrawerMask isOpen={open} className={clssNameMask.join(" ")} onClick={event => onToggleDrawer(false)}/>
            <DrawerContent className={clssNameContent.join(" ")}>
              <p>
                This modal is rendered using{" "}
                <a
                  href="https://reactjs.org/docs/portals.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  portals
                </a>
                .
              </p>
              <button type="button" onClick={event => onToggleDrawer(false)}>
                Close Modal
              </button>
            </DrawerContent>
        </DrawerWrapper>
        </ClientOnlyPortal>
    </React.Fragment>
  );
}
