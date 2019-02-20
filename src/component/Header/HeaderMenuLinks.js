import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const menuItems = [
  { label: 'Gallery', url: '/gallery' },
  { label: 'About', url: '/about' },
  { label: 'Store', url: '/store' },
  { label: 'Contact', url: '/contact' }
]

const NavLink = (args) => {
  return menuItems.map((item) => {
    if (args.currentpath !== item.url) {
      return (
        <Link to={item.url} className={'menu-links-item'}>
          {item.label}
        </Link>
      )
    } else {
      return <div className={'menu-links-item-active'}>{item.label}</div>
    }
  })
}

export default class HeaderMenuLinks extends React.Component {
  render() {
    return (
      <div className={'menu-links'}>
        <NavLink currentpath={this.props.pathname} />
      </div>
    )
  }
}

HeaderMenuLinks.propTypes = {
  pathname: PropTypes.string.isRequired
}
