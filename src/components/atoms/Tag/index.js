import React from "react"
import { TagStyle } from "./Tag.style"
import { Link } from "gatsby"
const Tag = React.memo(props => {
  return (
    <Link to={"/tags/" + props.tag}>
      <TagStyle theme={props.children} themeText={props.children}>
        {"#" + props.children}
      </TagStyle>
    </Link>
  )
})
export default Tag
