import React from "react";
import { LabelWrapper } from "./Label.style";
const Label = React.forwardRef(({ label, onClick, href, type }, ref) => (
  <LabelWrapper href={href} ref={ref} onClick={onClick} type={type}>
    {label}
  </LabelWrapper>
));
export default Label;
