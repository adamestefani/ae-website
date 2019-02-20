import React from 'react'
import { PropTypes } from 'prop-types'

const menuItems = [
  { label: 'Gallery', name: 'gallery' },
  { label: 'About', name: 'about' },
  { label: 'Store', name: 'store' },
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

export default class HeaderMenuLinks extends React.Component {
  render() {
    return (
      <div className="menu-links" id={'menu-links'}>
        <NavLink
          handleChangeActiveMenuItem={this.props.handleChangeActiveMenuItem}
          activeMenuItem={this.props.activeMenuItem}
        />
      </div>
    )
  }
}

HeaderMenuLinks.propTypes = {
  handleChangeActiveMenuItem: PropTypes.func,
  activeMenuItem: PropTypes.string
}
