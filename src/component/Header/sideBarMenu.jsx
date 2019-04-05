import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'

const SideBarMenu = (props) => {
  const { sideMenuBarActive } = useContext(GlobalContext)

  return (
    <div
      className={`side-bar-wrapper 
        ${sideMenuBarActive ? 'side-menu-on' : ''}
        `}
    />
  )
}

export default SideBarMenu
