import styled from "styled-components"

export const SkillIconWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
export const SkillIconStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 200px;
  height: 200px;
  box-shadow: 0px 8px 14px 0px #eaeaea;
  border-radius: 10px;
  align-items: center;
  padding: 25px;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    box-shadow: 0px 8px 14px 0px #cccccc;
  }
  & > img {
    margin-bottom: 0px;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  & > span {
    font-size: 18px;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
  }
`
