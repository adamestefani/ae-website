import React from 'react'
import { Home, Gallery, About } from './subpages/Subpages'

const Body = (props) => {
  return (
    <div className="body-wrapper">
      <Home />
      <Gallery />
      <About />
      {/* <Contact /> */}
    </div>
  )
}

export default Body
