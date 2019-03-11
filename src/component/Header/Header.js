import React from 'react'
import HeaderHomeLogo from './HeaderHomeLogo'
import HeaderMenuLinks from './HeaderMenuLinks'
import { PropTypes } from 'prop-types'

export default class Header extends React.Component {
  render() {
    return (
      <div className={'header-area'}>
        <HeaderHomeLogo
          handleChangeActiveMenuItem={this.props.handleChangeActiveMenuItem}
          activeMenuItem={this.props.activeMenuItem}
        />
        <HeaderMenuLinks
          handleChangeActiveMenuItem={this.props.handleChangeActiveMenuItem}
          activeMenuItem={this.props.activeMenuItem}
        />
      </div>
    )
  }
}

Header.propTypes = {
  handleChangeActiveMenuItem: PropTypes.func,
  activeMenuItem: PropTypes.string
}
