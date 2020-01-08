import React, { useState } from "react";
import ClientOnlyPortal from "./ClientOnlyPortal";
import { DrawerWrapper, DrawerMask, DrawerContent } from "./Drawer.style";
import { motion } from "framer-motion";
export default function Drawer() {
  const [open, setOpen] = useState();

  return (
    <React.Fragment>
      <button type="button" onClick={event => setOpen(true)}>
        Open Modal
      </button>

      <ClientOnlyPortal selector="#drawer">
        <DrawerWrapper isOpen={open}>
          <DrawerMask isOpen={open} />
          <motion.div animate={{ x: open ? 0 : -300 }}>
            <DrawerContent>
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
              <button type="button" onClick={event => setOpen(false)}>
                Close Modal
              </button>
            </DrawerContent>
          </motion.div>
        </DrawerWrapper>
      </ClientOnlyPortal>
    </React.Fragment>
  );
}
