import React from "react";
import { LabelWrapper } from "./Label.style";
const Label = React.forwardRef(({ label, onClick, href }, ref) => (
    <LabelWrapper href={href} ref={ref} onClick={onClick} type="link">
      {label}
    </LabelWrapper>
  ));
export default Label;

