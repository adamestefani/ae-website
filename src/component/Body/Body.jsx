import React from 'react'
import { Home, Gallery, About } from './subpages/Subpages'

const Body = (props) => {
  return (
    <>
      <Home />
      <Gallery />
      <About />
      {/* <Contact /> */}
    </>
  )
}

export default Body
