import React from "react"
import { listSocial } from "./listSocial"
import { SocialNetWrapper, SocialNetItem } from "./Social.style"

const SocialNetworth = React.memo(props => {
  return (
    <SocialNetWrapper>
      {listSocial.map(item => {
        return (
          <>
            <SocialNetItem>
              <a href={item.url} key={item.id} target="_blank">
                {item.name}
              </a>
            </SocialNetItem>
          </>
        )
      })}
    </SocialNetWrapper>
  )
})

export default SocialNetworth
