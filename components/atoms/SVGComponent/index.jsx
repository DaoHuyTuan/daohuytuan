import React from "react";
import { NAME_ICON } from "./name"
const SVGComponent = React.memo(
  ({
    name,
    fill,
    width,
    className,
    height,
    handleChange,
    viewBox
  }) => {
    const getPath = (name, props) => {
      switch (name) {
        case NAME_ICON.CLOSE:
          return <path {...props} stroke={props.fill} strokeMiterlimit="10" strokeWidth="2" d="M4 4L20 20M20 4L4 20"/>;
        case NAME_ICON.HAMBUGER:
            return <path {...props} d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/>
      }
    };
    const getViewBox = name => {
      switch (name) {
        case NAME_ICON.CLOSE:
          return "0 0 24 24";
        case NAME_ICON.HAMBUGER:
            return "0 0 24 24"
      }
    };
    return (
      <svg
        width={width}
        height={height}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox || getViewBox(name)}
        xmlnsXlink="http://www.w3.org/1999/xlink"
        onClick={handleChange}
      >
        {getPath(name, { fill })}
      </svg>
    );
  }
);

export default SVGComponent;