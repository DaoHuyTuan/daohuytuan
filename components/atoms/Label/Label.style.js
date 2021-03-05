import styled from 'styled-components'
import { COLOR_THEME, BLACK_THEME, BLACK_THEME_2 } from '../../../theme/theme'
import { SIZE, FONT_THEME } from '../../../theme/variable'

const handleTypeLabel = (type, themeData) => {
  const { light, theme } = themeData
  let result
  switch (type) {
    case 'link':
      return (result = `
      margin-right:40px;
      font-size: 1.3rem;
      font-weight: 600;
      color: ${theme.color}
      text-decoration: none;
      cursor: pointer;
      &.drawer-active {
        color: ${theme.colorLink};
        position: relative;
        @media only screen and (min-width: ${SIZE.MD}px) {
          &:after {
            content: "";
            width: 100%;
            height: 2px;
            display: block;
            background-color: ${theme.colorLink};
            position: absolute;
            bottom: -4px;
          }
        }
      }`)
    case 'linkMobile':
      return (result = `
      font-weight: 400;
      color: ${theme.color}
      height: 50px;
      padding-left: 20px;
      text-decoration: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      &.drawer-active {
        font-weight: 600;
        position: relative;
        color: ${theme.colorLink}
        @media only screen and (max-width: ${SIZE.MD}px) {
          &:after {
            content: "";
            width: 18%;
            height: 2px;
            display: block;
            background-color: ${theme.colorLink}
            position: absolute;
            bottom: 5px;
          }
        }
      }
  
    `)
    default:
      return result
  }
}

const LabelWrapper = styled.a`
  ${props => handleTypeLabel(props.type, props.theme.stateTheme)}
`
const LabelCustom = styled.span`
  list-style: none;
  color: ${props => (props.colors ? props.colors : COLOR_THEME)};
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  font-family: ${props => (props.fontFamily ? props.fontFamily : FONT_THEME)};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '')};
  padding-bottom: ${props => (props.paddingBot ? props.paddingBot : '')};
  margin-bottom: ${props => (props.marginBot ? props.marginBot : '')};
`
export { LabelWrapper, LabelCustom }
