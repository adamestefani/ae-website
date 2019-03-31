import React from 'react'
import { PropTypes } from 'prop-types'

const BackgroundImage = (props) => {
  return <div className={props.className} />
}

BackgroundImage.propTypes = {
  className: PropTypes.string
}

export default BackgroundImage
