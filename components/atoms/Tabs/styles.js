import styled from 'styled-components'

const Wraper = styled.div`
  display: flex;
  height: 250px;
  flex-flow: column;
`

const TabItem = styled.div``

const TabContent = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 10px;
  border: none;
  outline: 0;
  resize: none;
`

const TabControl = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  &:after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #ddd;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`

const TabControlLabel = styled.a`
  font-size: 1rem;
  padding: 5px 10px;
  color: #7d7d7d;
  position: relative;
  cursor: pointer;
  font-weight: 600;
  ${props =>
    props.active &&
    `  
    color: red;
    &:after {
        content: '';
        width: calc(100% - 10px);
        height: 1px;
        display: block;
        position: absolute;
        background-color: red;
        left: 50%;
        transform: translateX(-50%);
        bottom: -11px;
        z-index: 1;
      }`}
`

export { Wraper, TabItem, TabContent, TabControl, TabControlLabel }
