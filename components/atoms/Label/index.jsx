import React from "react";
import { LabelWrapper } from "./Label.style";
const Label = React.forwardRef(
  ({ label, onClick, href, type, activeClass, clssName, target }, ref) => {
    const classNames = [clssName ? clssName : ""];
    if (activeClass) {
      classNames.push(activeClass);
    }
    return (
      <LabelWrapper
        href={href}
        ref={ref}
        onClick={onClick}
        type={type}
        className={classNames ? classNames.join(" ") : ""}
        target={target}
      >
        {label}
      </LabelWrapper>
    );
  }
);
export default Label;
