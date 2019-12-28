import React from "react";
import { LabelWrapper } from "./Label.style";
const Label = React.memo(props => {
  return <LabelWrapper>{props.children}</LabelWrapper>;
});
export default Label;
