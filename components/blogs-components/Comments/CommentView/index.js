import React from 'react'
import {
  CommentContainer,
  CommentViewWrapper,
  CommentName,
  CommentContent,
  AvatarBorder,
  CommentAvatar,
  CommentViewInfo,
  CommentInfo,
  CommentDate
} from './styles'
import avatar from '../../../../public/static/images/avatar-women.jpeg'

const CommentView = React.memo(({ contents, user, date }) => {
  return (
    <CommentContainer>
      <CommentViewWrapper>
        <CommentViewInfo>
          <AvatarBorder>
            <CommentAvatar src={avatar} />
          </AvatarBorder>
          <CommentInfo>
            <CommentName>{user}</CommentName>
            <CommentDate>{date}</CommentDate>
          </CommentInfo>
        </CommentViewInfo>

        <CommentContent>{contents}</CommentContent>
      </CommentViewWrapper>
    </CommentContainer>
  )
})

export default CommentView
