import React from 'react'
import {NavLink} from 'react-router-dom'

export default class HeaderMenuLinks extends React.Component {
  render() {
    return (
      <div className={'menu-links'}>
        <div className={'menu-links-item'}>
          <NavLink to={'/gallery'}>Gallery</NavLink>
        </div>
        <div className={'menu-links-item'}>About</div>
        <div className={'menu-links-item'}>Store</div>
        <div className={'menu-links-item'}>Contact</div>
      </div>
    )
  }
}