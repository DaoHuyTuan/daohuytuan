import React from "react"
import { AboutBlockSubTitleStyle } from "./AboutBlockSubTitle.style"
const AboutBlockSubTitle = React.memo(props => {
  return <AboutBlockSubTitleStyle>{props.children}</AboutBlockSubTitleStyle>
})

export default AboutBlockSubTitle
