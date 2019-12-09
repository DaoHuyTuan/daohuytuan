import React from "react"
import { AboutBlockContentStyle } from "./AboutBlockContent.style"
const AboutBlockContent = React.memo(props => {
  return (
    <AboutBlockContentStyle mbottom={props.mbottom}>
      {props.children}
    </AboutBlockContentStyle>
  )
})

export default AboutBlockContent
