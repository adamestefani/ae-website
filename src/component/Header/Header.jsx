import React from 'react'
import HeaderHomeLogo from './HeaderHomeLogo'
import HeaderMenuLinks from './HeaderMenuLinks'
import { PropTypes } from 'prop-types'

const Header = (props) => {
  return (
    <div
      className={
        props.activeMenuItem === 'home' ? 'header-area' : 'header-area content'
      }
    >
      <HeaderHomeLogo
        handleChangeActiveMenuItem={props.handleChangeActiveMenuItem}
        activeMenuItem={props.activeMenuItem}
      />
      <HeaderMenuLinks
        handleChangeActiveMenuItem={props.handleChangeActiveMenuItem}
        activeMenuItem={props.activeMenuItem}
      />
    </div>
  )
}

Header.propTypes = {
  handleChangeActiveMenuItem: PropTypes.func,
  activeMenuItem: PropTypes.string
}

export default Header
