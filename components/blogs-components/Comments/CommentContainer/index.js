import React from 'react'
import { CommentWrapper } from '../../blog.style'

const CommentContainer = React.memo(() => {
    return (
        <CommentWrapper>
            <span>hello this is comment</span>
        </CommentWrapper>
        
    )
})

export default CommentContainer