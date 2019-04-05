import React from 'react'
import iconFacebook from '../../resource/icon_facebook.svg'
import iconInstagram from '../../resource/icon_instagram.svg'
import iconTwitter from '../../resource/icon_twitter.svg'

const mediaIcons = [
  { url: process.env.REACT_APP_URL_IG, icon: iconInstagram },
  { url: process.env.REACT_APP_URL_FB, icon: iconFacebook },
  { url: process.env.REACT_APP_URL_TW, icon: iconTwitter }
]

const SocialMediaMenu = () => {
  return (
    <div className="footer-media">
      {mediaIcons.map((media, index) => {
        return (
          <a href={media.url} target="blank" key={index}>
            <img className="footer-media-item" src={media.icon} alt="" />
          </a>
        )
      })}
    </div>
  )
}

export default SocialMediaMenu
