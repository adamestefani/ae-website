import React, { useContext } from 'react'
import menuIcon from '../../resource/icon_burger.svg'
import closeMenu from '../../resource/icon_close.svg'
import MenuNavigationLink from './MenuNavigationLink'
import GlobalContext from '../../context/globalContext'
import { TOGGLE_SIDE_MENU_BAR } from '../../action/globalAction'

const HeaderMenuLinks = (props) => {
  const { sideMenuBarActive, dispatchSideMenuBar } = useContext(GlobalContext)

  const toggleSideMenuBar = () => {
    dispatchSideMenuBar({ type: TOGGLE_SIDE_MENU_BAR })
  }

  return (
    <>
      <div className="menu-links" id={'menu-links'}>
        <MenuNavigationLink />
      </div>
      <div className={`menu-icon ${sideMenuBarActive ? 'show-side-menu' : ''}`}>
        <img
          src={sideMenuBarActive ? closeMenu : menuIcon}
          alt=""
          onClick={toggleSideMenuBar}
        />
      </div>
    </>
  )
}

export default HeaderMenuLinks
