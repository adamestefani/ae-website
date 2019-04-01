import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Copyright from '../../util/copyright'
import ModalLargePicture from '../ModalLargePicture'

const filePath = process.env.REACT_APP_FILE_PATH
const gallery = new Array(24).fill(undefined).map((_, index) => index + 1)

const Gallery = (props) => {
  const [showLargePicture, setShowLargePicture] = useState(false)
  const [largePictureName, setLargePictureName] = useState('')

  const openLargePicture = (event) => {
    setShowLargePicture(true)
    setLargePictureName(event.target.name)
  }

  const closeLargePicture = () => {
    setShowLargePicture(false)
    setLargePictureName('')
  }

  const renderGallery = () => {
    return (
      <div className="gallery-grid">
        {gallery.map((value, index) => {
          const pictureName = `img_${'000'
            .substring(String(value).length, 3)
            .concat(value)}.jpg`

          return (
            <div className="gallery-item">
              <img
                key={index}
                src={filePath.concat('portfolio/thumbs/', pictureName)}
                alt=""
                name={pictureName}
                onClick={openLargePicture}
              />
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      <div
        id="gallery"
        className={
          props.activeMenuItem === 'gallery'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className={'page-title'}>Gallery</h1>
        {renderGallery()}

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

Gallery.propTypes = {
  activeMenuItem: PropTypes.string
}

export default Gallery
