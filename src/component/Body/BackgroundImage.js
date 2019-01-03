import React from 'react'
import backgroundImage from '../../resource/home-background.jpg'

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
  left: '0'
}

export default class BackgroundImage extends React.Component {

  render () {
    return (
      <div style={backgroundStyle} />
    )
  }
}