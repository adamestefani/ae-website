import React, { Component } from 'react'
import PropTypes from 'prop-types'
import iconFacebook from '../../resource/icon_facebook.svg'
import iconInstagram from '../../resource/icon_instagram.svg'
import iconTwitter from '../../resource/icon_twitter.svg'

const mediaIcons = [
  { url: 'https://instagram.com/adamestefani', icon: iconInstagram },
  {
    url: 'https://www.facebook.com/AdamEstefaniPhotography/',
    icon: iconFacebook
  },
  { url: 'https://twitter.com/adamestefani', icon: iconTwitter }
]

class Footer extends Component {
  renderMedia() {
    return mediaIcons.map((media, index) => {
      return (
        <a href={media.url} target="blank" key={index}>
          <img className="footer-media-item" src={media.icon} alt="" />
        </a>
      )
    })
  }

  render() {
    return (
      <div
        className={
          this.props.activeMenuItem === 'home'
            ? 'footer-area-home home-color'
            : 'footer-area'
        }
      >
        <div className="footer-media">{this.renderMedia()}</div>
        <div className="footer-copyright">
          Copyright &copy; {new Date().getFullYear()} Adam Estefani.
        </div>
      </div>
    )
  }
}

Footer.propTypes = {
  activeMenuItem: PropTypes.string
}

export default Footer
