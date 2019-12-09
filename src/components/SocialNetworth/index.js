import React from "react"
import { listSocial } from "./listSocial"
import { SocialNetWrapper, SocialNetItem } from "./Social.style"

const SocialNetworth = React.memo(props => {
  return (
    <SocialNetWrapper>
      {listSocial.map(item => {
        return (
          <SocialNetItem key={item.id}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          </SocialNetItem>
        )
      })}
    </SocialNetWrapper>
  )
})

export default SocialNetworth
