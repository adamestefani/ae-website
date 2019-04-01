import React from 'react'
import { PropTypes } from 'prop-types'
import menuIcon from '../../resource/icon_burger.svg'

const menuItems = [
  { label: 'Gallery', name: 'gallery' },
  { label: 'About', name: 'about' },
  // { label: 'Store', name: 'store' },
  { label: 'Contact', name: 'contact' }
]

const NavLink = (args) => {
  return menuItems.map((item) => {
    return (
      <a
        href={`#${item.name}`}
        onClick={args.handleChangeActiveMenuItem}
        className={'menu-links-item'.concat(
          args.activeMenuItem === item.name ? ' active' : ''
        )}
        key={item.name}
        id={`menu-item-${item.name}`}
        name={item.name}
      >
        {item.label}
      </a>
    )
  })
}

const HeaderMenuLinks = (props) => {
  return (
    <>
      <div className="menu-links" id={'menu-links'}>
        <NavLink
          handleChangeActiveMenuItem={props.handleChangeActiveMenuItem}
          activeMenuItem={props.activeMenuItem}
        />
      </div>
      <div className="menu-icon">
        <img src={menuIcon} alt="" />
      </div>
    </>
  )
}

HeaderMenuLinks.propTypes = {
  handleChangeActiveMenuItem: PropTypes.func,
  activeMenuItem: PropTypes.string
}

export default HeaderMenuLinks
