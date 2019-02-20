import React from 'react'
import BackgroundImage from '../BackgroundImage'
import { PropTypes } from 'prop-types'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <BackgroundImage
          className={
            this.props.activeMenuItem === 'home'
              ? 'home-background'
              : 'home-background fade-background-out'
          }
        />
      </>
    )
  }
}

Home.protoTypes = {
  activeMenuItem: PropTypes.string
}
