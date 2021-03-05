import React, { useState, useCallback, useContext } from 'react'
import { withRouter } from 'next/router'
import Link from 'next/link'
import { menuList, handleActiveClass } from '../Menu/menu'
import Menu from '../Menu'
import Drawer from '../Drawer'
import Logo from '../../atoms/Logo'
import Label from '../../atoms/Label'
import IconSVG from '../../atoms/IconSVG'
import HambugerMenu from '../../atoms/HambugerMenu'
import SVGComponent from '../../atoms/SVGComponent'
import dayIcon from '../../../public/static/icons/sun.svg'
import nightIcon from '../../../public/static/icons/night.svg'
import closeIcon from '../../../public/static/icons/close.svg'
import { HeaderWrapper } from './Header.style'
import { ThemeContext } from '../../../contexts/theme/reducer'
import { MenuGroup, MenuWrapperMobile, MenuHeaderMobile } from '../Menu/Menu.style'
import { BLACK_THEME } from '../../../theme/theme'
const Header = React.memo(({ router }) => {
  const ref = React.createRef
  const regex = 'http'
  const [isOpen, setIsOpen] = useState(false)
  const { dispatch } = useContext(ThemeContext)
  const [theme, setTheme] = useState({ light: false, content: nightIcon })
  const onToggleDrawer = useCallback(() => {
    setIsOpen(prevState => !prevState)
  })
  const onChangeTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE' })
    setTheme(prevState => ({
      ...prevState,
      light: !prevState.light,
      content: !prevState.light ? dayIcon : nightIcon
    }))
  })
  const onHandleActiveClass = useCallback(regex => {
    const result = handleActiveClass(router.pathname, regex)
    return result
  })
  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen} onClose={onToggleDrawer}>
        <MenuWrapperMobile>
          <MenuHeaderMobile>
            <Link href='/'>
              <Logo />
            </Link>
            <SVGComponent
              name='close'
              width={24}
              height={24}
              fill={!theme.light ? BLACK_THEME : '#f9f9f9'}
              handleChange={onToggleDrawer}
            />
          </MenuHeaderMobile>
          {menuList.map(item => {
            return item.url.includes(regex) ? (
              <Label ref={ref} label={item.name} href={item.url} key={item.id} type='linkMobile' />
            ) : (
              <Link href={item.url} key={item.id}>
                <Label
                  ref={ref}
                  label={item.name}
                  type='linkMobile'
                  onClick={onToggleDrawer}
                  activeClass={onHandleActiveClass(item.regex)}
                />
              </Link>
            )
          })}
        </MenuWrapperMobile>
      </Drawer>
      <HambugerMenu onToggle={onToggleDrawer} theme={theme.light} />
      <Link href='/'>
        <Logo />
      </Link>
      <MenuGroup>
        <Menu />
        <IconSVG content={theme.content} alt='toggle theme' handleChange={onChangeTheme} />
      </MenuGroup>
    </HeaderWrapper>
  )
})

export default withRouter(Header)
