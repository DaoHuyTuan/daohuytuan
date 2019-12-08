import React from "react"
import { SkillIconStyle, SkillIconTitleStyle } from "./SkillIcon.style"
const SkillIcon = React.memo(props => {
  return (
    <>
      <SkillIconStyle>
        <img src={props.contents} alt={props.alt} />
        <span>{props.skillName}</span>
      </SkillIconStyle>
    </>
  )
})

export default SkillIcon
