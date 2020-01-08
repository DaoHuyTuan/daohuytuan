import React from 'react';
import { DrawerWrapper } from "./Drawer.style";
import { render, createPortal } from "react-dom";
class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.drawer = document.createElement("div");
    }
    componentDidMount() {
        const drawerRoot = document.getElementById("drawer");
        console.log(drawerRoot)
        drawerRoot.appendChild(this.drawer);
    }
    componentWillUnmount() {
        drawerRoot.removeChild(this.drawer);
      }
    render() {
        return createPortal(
            this.props.children,
            this.drawer
        )
    }
}
export default Drawer;