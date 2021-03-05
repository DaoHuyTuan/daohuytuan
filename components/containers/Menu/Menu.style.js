import styled from 'styled-components'
import { SIZE } from '../../../theme/variable'
const MenuWrapper = styled.div`
  display: none;
  @media only screen and (min-width: ${SIZE.MD}px) {
    display: flex;
    flex-flow: row;
  }
`
const MenuWrapperMobile = styled.div`
  display: flex;
  flex-flow: column;
`
const MenuHeaderMobile = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;

  ${props => (props.theme.stateTheme.light ? 'border-bottom: 1px solid #ddd' : '')}
  ${props => !props.theme.stateTheme.light && 'background-color: #394254'}
`
const MenuGroup = styled.div`
  display: flex;
  align-items: center;
`
export { MenuWrapper, MenuGroup, MenuWrapperMobile, MenuHeaderMobile }
