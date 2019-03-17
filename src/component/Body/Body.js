import React from 'react'
import { Home, Gallery, About, Store, Contact } from './subpages/Subpages'
import { PropTypes } from 'prop-types'

export default class Body extends React.Component {
  render() {
    return (
      <>
        <Home activeMenuItem={this.props.activeMenuItem} />
        <Gallery activeMenuItem={this.props.activeMenuItem} />
        <About activeMenuItem={this.props.activeMenuItem} />
        <Store activeMenuItem={this.props.activeMenuItem} />
        <Contact activeMenuItem={this.props.activeMenuItem} />
      </>
    )
  }
}

Body.propTypes = {
  activeMenuItem: PropTypes.string
}
