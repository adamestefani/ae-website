import React from 'react'
import { PropTypes } from 'prop-types'

export default class BackgroundImage extends React.Component {
  render() {
    return <div className={this.props.className} />
  }
}

BackgroundImage.propTypes = {
  className: PropTypes.string
}
