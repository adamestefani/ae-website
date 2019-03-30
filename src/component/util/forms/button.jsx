import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
  render() {
    const { type, label, onClick } = this.props

    return (
      <div>
        <input
          className="input-button"
          type={type}
          value={label}
          onClick={onClick}
        />
      </div>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
