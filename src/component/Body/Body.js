import React from 'react'
import { Home, Gallery, About, Store, Contact } from './subpages/Subpages'
import { PropTypes } from 'prop-types'

export default class Body extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Home activeMenuItem={this.props.activeMenuItem} />
        <Gallery activeMenuItem={this.props.activeMenuItem} />
        <About activeMenuItem={this.props.activeMenuItem} />
        <Store activeMenuItem={this.props.activeMenuItem} />
        <Contact activeMenuItem={this.props.activeMenuItem} />
      </div>
    )
  }
}

Body.propTypes = {
  activeMenuItem: PropTypes.string
}
