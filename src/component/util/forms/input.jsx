import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Input extends Component {
  render() {
    const { name, label } = this.props

    return (
      <>
        <div className="input-label">{label}</div>
        <input className="input-text" type="text" name={name} />
      </>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string
}

export default Input
