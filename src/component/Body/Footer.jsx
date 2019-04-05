import React, { useContext } from 'react'
import Copyright from '../util/copyright'
import GlobalContext from '../../context/globalContext'
import SocialMediaMenu from './socialMediaMenu'

const Footer = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)

  return (
    <div
      className={
        activeMenuItem === 'home'
          ? 'footer-area-home home-color'
          : 'footer-area'
      }
    >
      <SocialMediaMenu />
      <Copyright className="footer-copyright" />
    </div>
  )
}

export default Footer
