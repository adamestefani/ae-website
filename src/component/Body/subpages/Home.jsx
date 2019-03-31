import React from 'react'
import BackgroundImage from '../BackgroundImage'
import { PropTypes } from 'prop-types'

const Home = (props) => {
  return (
    <>
      <BackgroundImage
        className={
          props.activeMenuItem === 'home'
            ? 'home-background'
            : 'home-background fade-background-out'
        }
      />
    </>
  )
}

Home.protoTypes = {
  activeMenuItem: PropTypes.string
}

export default Home
