import React from 'react'
import HeaderHomeLogo from './HeaderHomeLogo'
import HeaderMenuLinks from './HeaderMenuLinks'

export default class Header extends React.Component {
  render() {
    return (
      <div className={'header-area'}>
        <HeaderHomeLogo/>
        <HeaderMenuLinks/>
      </div>
    )
  }
}