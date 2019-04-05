import React, { useContext } from 'react'
import HeaderHomeLogo from './HeaderHomeLogo'
import HeaderMenuLinks from './HeaderMenuLinks'
import GlobalContext from '../../context/globalContext'

const Header = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)

  return (
    <div
      className={
        activeMenuItem === 'home' ? 'header-area' : 'header-area content'
      }
    >
      <HeaderHomeLogo />
      <HeaderMenuLinks />
    </div>
  )
}

export default Header
