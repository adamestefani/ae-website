import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'

const NavLink = (args) => {
  if (args.currentpath !== args.to) {
    return <Link {...args} />
  } else {
    return <div {...args} />
  }
}

export default class HeaderHomeLogo extends React.Component {
  render() {
    return (
      <div className={'home-link'}>
        <NavLink to={'/'} currentpath={this.props.pathname}>
          <div className={'home-title'}>website</div>
          <div className={'home-subtitle'}>another title or slogan</div>
        </NavLink>
      </div>
    )
  }
}

HeaderHomeLogo.propTypes = {
  pathname: PropTypes.string.isRequired
}
