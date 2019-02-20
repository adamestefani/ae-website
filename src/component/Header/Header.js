import React from 'react'
import {PropTypes} from 'prop-types'
import HeaderHomeLogo from './HeaderHomeLogo'
import HeaderMenuLinks from './HeaderMenuLinks'

export default class Header extends React.Component {
  render() {
    return (
      <div className={'header-area'}>
        <HeaderHomeLogo pathname={this.props.pathname}/>
        <HeaderMenuLinks pathname={this.props.pathname}/>
      </div>
    )
  }
}

Header.propTypes = {
  pathname: PropTypes.string.isRequired
}
