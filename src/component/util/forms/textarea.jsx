import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Textarea extends Component {
  render() {
    const { name, label } = this.props

    return (
      <>
        <div className="input-label">{label}</div>
        <textarea
          className="input-text textarea"
          type="text"
          name={name}
        />
      </>
    )
  }
}

Textarea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
}

export default Textarea
