import React from 'react'
import { Home, Gallery, About, Contact } from './subpages/Subpages'
import { PropTypes } from 'prop-types'

const Body = (props) => {
  return (
    <>
      <Home activeMenuItem={props.activeMenuItem} />
      <Gallery activeMenuItem={props.activeMenuItem} />
      <About activeMenuItem={props.activeMenuItem} />
      <Contact activeMenuItem={props.activeMenuItem} />
    </>
  )
}

Body.propTypes = {
  activeMenuItem: PropTypes.string
}

export default Body
