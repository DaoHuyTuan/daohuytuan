import React from "react"
import { TagStyle } from "./Tag.style"
const Tag = React.memo(props => {
  return (
    <TagStyle theme={props.children} themeText={props.children}>
      {props.children}
    </TagStyle>
  )
})
export default Tag
