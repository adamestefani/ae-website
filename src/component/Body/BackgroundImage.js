import React from 'react'
import backgroundImage from '../../resource/home-background.jpg'
import PropTypes from 'prop-types'

const backgroundStyle = {
  zIndex: -1,
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundColor: 'rgb(0, 50, 80)',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: '0',
  left: '0',
  transition: 'opacity 250ms ease-in'
}

export default class BackgroundImage extends React.Component {
  render() {
    return <div className={this.props.className} style={backgroundStyle} />
  }
}

BackgroundImage.propTypes = {
  className: PropTypes.string
}
