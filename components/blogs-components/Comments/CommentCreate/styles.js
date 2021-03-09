import styled from 'styled-components'

const CommentCreateWrapper = styled.div`
  height: ${props => props.height};
  position: relative;
  // background-color: red;

  min-height: 250px;
  font-family: Montserrat, sans-serif;
  border: 1px solid #ddd;
  border-radius: 5px;
`

export { CommentCreateWrapper }
