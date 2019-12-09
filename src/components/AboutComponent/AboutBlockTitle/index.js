import React from "react"
import { AboutBlockTitleStyle } from "./AboutBlockTitle.style"
const AboutBlockTitle = React.memo(props => {
  return <AboutBlockTitleStyle>{props.children}</AboutBlockTitleStyle>
})

export default AboutBlockTitle
