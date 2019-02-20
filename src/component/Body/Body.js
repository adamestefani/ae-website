import React from 'react'
import { Home, Gallery, About, Store, Contact } from './subpages/Subpages'
import {PropTypes} from 'prop-types'

export default class Body extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Home activeMenuItem={this.props.activeMenuItem}/>
        <Gallery />
        <About />
        <Store />
        <Contact />
      </div>
    )
  }
}

Body.propTypes = {
  activeMenuItem: PropTypes.string
}