import React from 'react'
import PropTypes from 'prop-types'
import iconFacebook from '../../resource/icon_facebook.svg'
import iconInstagram from '../../resource/icon_instagram.svg'
import iconTwitter from '../../resource/icon_twitter.svg'
import Copyright from '../util/copyright'

const mediaIcons = [
  { url: process.env.REACT_APP_URL_IG, icon: iconInstagram },
  { url: process.env.REACT_APP_URL_FB, icon: iconFacebook },
  { url: process.env.REACT_APP_URL_TW, icon: iconTwitter }
]

const Footer = (props) => {
  const renderMedia = () => {
    return mediaIcons.map((media, index) => {
      return (
        <a href={media.url} target="blank" key={index}>
          <img className="footer-media-item" src={media.icon} alt="" />
        </a>
      )
    })
  }

  return (
    <div
      className={
        props.activeMenuItem === 'home'
          ? 'footer-area-home home-color'
          : 'footer-area'
      }
    >
      <div className="footer-media">{renderMedia()}</div>
      <Copyright className="footer-copyright" />
    </div>
  )
}

Footer.propTypes = {
  activeMenuItem: PropTypes.string
}

export default Footer
