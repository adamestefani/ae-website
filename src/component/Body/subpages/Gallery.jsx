import React, { useState, useContext } from 'react'
import Copyright from '../../util/copyright'
import ModalLargePicture from '../ModalLargePicture'
import GlobalContext from '../../../context/globalContext'
import PortfolioGallery from './portfolioGallery'

const Gallery = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)
  const [showLargePicture, setShowLargePicture] = useState(false)
  const [largePictureName, setLargePictureName] = useState('')

  const openLargePicture = (event) => {
    setShowLargePicture(true)
    setLargePictureName(event.target.name)
    document.body.classList.add('disable-scroll')
  }

  const closeLargePicture = () => {
    setShowLargePicture(false)
    setLargePictureName('')
    document.body.classList.remove('disable-scroll')
  }

  return (
    <>
      <div
        id="gallery"
        className={
          activeMenuItem === 'gallery' ? 'page-content target' : 'page-content'
        }
      >
        <h1 className={'page-title'}>Gallery</h1>
        <PortfolioGallery openLargePicture={openLargePicture} />
        <Copyright className="show-copyright" />
      </div>
      <ModalLargePicture
        className={
          showLargePicture ? 'modal-container active' : 'modal-container'
        }
        closeLargePicture={closeLargePicture}
        largePictureName={largePictureName}
      />
    </>
  )
}

export default Gallery
