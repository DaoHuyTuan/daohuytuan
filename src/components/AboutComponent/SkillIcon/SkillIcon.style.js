import styled from "styled-components"

export const SkillIconWrapper = styled.div`
  display: flex;
`
export const SkillIconStyle = styled.div`
  display: flex;
  flex-flow: row;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  transition: 0.5s;
  cursor: pointer;
  margin-right: 20px;

  & > img {
    margin-bottom: 0px;
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-right: 10px;
  }
  & > span {
    font-size: 18px;
    font-family: Montserrat, sans-serif;
  }
`
