import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import MenuNavigationLink from './MenuNavigationLink'

const SideBarMenu = (props) => {
  const { sideMenuBarActive } = useContext(GlobalContext)

  return (
    <div
      className={`side-bar-wrapper 
        ${sideMenuBarActive ? 'side-menu-on' : ''}
        `}
    >
      <div className="side-menu-links">
        <MenuNavigationLink />
      </div>
    </div>
  )
}

export default SideBarMenu
