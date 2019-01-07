import React from 'react'
import {NavLink} from 'react-router-dom'

export default class HeaderHomeLogo extends React.Component {
  render() {
    return (
      <div className={'home-link'}>
        <NavLink to={'/'}>
          <div className={'home-title'}>adam estefani</div>
          <div className={'home-subtitle'}>landscape, urban & lifestyle photography</div>
        </NavLink>
      </div>
    )
  }
}