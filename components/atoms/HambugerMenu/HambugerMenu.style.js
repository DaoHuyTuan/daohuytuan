import styled from 'styled-components'
import { SIZE } from '../../../theme/variable'
const HambugerMenuWrapper = styled.div`
  cursor: pointer;
  height: 24px;
  width: 24px;
  display: none;
  @media only screen and (max-width: ${SIZE.MD}px) {
    display: block;
  }
`
export { HambugerMenuWrapper }
