import React from "react";
import { ButtonWrapper } from "./Button.style";
const Button = React.memo(({ clssName, content }) => {
    return (
        <ButtonWrapper clssName={clssName}>{content}</ButtonWrapper>
    )
})
export default Button;