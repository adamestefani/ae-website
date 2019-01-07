import React from 'react'
import BackgroundImage from "./BackgroundImage"

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <BackgroundImage className={'fade-out'}/>
        <h1 className={'page-title'}>Gallery</h1>
      </div>
    )
  }
}