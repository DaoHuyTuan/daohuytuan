import React from "react"
import {
  WorkExpTitleStyle,
  WorkExpLabel,
  WorkExpYear,
} from "./WorkExpTitle.style"
const WorkExpTitle = React.memo(props => {
  return (
    <WorkExpTitleStyle>
      <WorkExpLabel>{props.label}</WorkExpLabel>
      <WorkExpYear>{props.year}</WorkExpYear>
    </WorkExpTitleStyle>
  )
})
export default WorkExpTitle
