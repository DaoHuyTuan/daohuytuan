import React from 'react'
import {
  CommentContainer,
  CommentViewWrapper,
  CommentName,
  CommentContent,
  AvatarBorder,
  CommentAvatar
} from './styles'
import avatar from '../../../../public/static/images/avatar.svg'

const CommentView = React.memo(({ contents, user }) => {
  return (
    <CommentContainer>
      {/* <AvatarBorder> */}
      <CommentAvatar src={avatar} />
      {/* </AvatarBorder> */}
      <CommentViewWrapper>
        <CommentName>{user}</CommentName>
        <CommentContent>{contents}</CommentContent>
      </CommentViewWrapper>
    </CommentContainer>
  )
})

export default CommentView
