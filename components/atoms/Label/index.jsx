import React from "react";
import { LabelWrapper } from "./Label.style";
const Label = React.forwardRef((props, ref) => {
  return <LabelWrapper href={props.href}>{props.children}</LabelWrapper>;
});
export default Label;
