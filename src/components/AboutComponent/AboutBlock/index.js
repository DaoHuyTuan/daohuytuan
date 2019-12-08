import React from "react"
import { AboutBlockContainer } from "./AboutBlock.style"
const AboutBlock = React.memo(props => {
  return <AboutBlockContainer>{props.children}</AboutBlockContainer>
})
export default AboutBlock
