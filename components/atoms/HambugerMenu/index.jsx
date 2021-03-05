import React from 'react'
import { HambugerMenuWrapper } from './HambugerMenu.style'
import IconSVG from '../IconSVG'
import hambugerMenu from '../../../public/static/icons/hambuger-menu.svg'
import SVGComponent from '../SVGComponent'
import { BLACK_THEME } from '../../../theme/theme'
const HambugerMenu = React.memo(props => {
  return (
    <HambugerMenuWrapper onClick={props.onToggle}>
      <SVGComponent
        name='hambuger'
        width={24}
        height={24}
        fill={!props.theme ? BLACK_THEME : '#f9f9f9'}
      />
    </HambugerMenuWrapper>
  )
})
export default HambugerMenu
