import React from "react";
import Container from "Containers/Container";
import { CVBlockWrapper } from "./CVBlock.style";
const CVBlock = React.memo(props => {
    return (
        <CVBlockWrapper className={props.clssName}>
            {props.children}
        </CVBlockWrapper>    
    )
})
export default CVBlock;