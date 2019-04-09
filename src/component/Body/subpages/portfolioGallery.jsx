import React from 'react'
import { PropTypes } from 'prop-types'

const filePath = process.env.PUBLIC_URL
const gallery = new Array(24).fill(undefined).map((_, index) => index + 1)

const PortfolioGallery = (props) => {
  return (
    <div className="gallery-grid">
      {gallery.map((value, index) => {
        const pictureName = `img_${'000'
          .substring(String(value).length, 3)
          .concat(value)}.jpg`

        return (
          <div className="gallery-item" key={index}>
            <img
              src={filePath.concat('portfolio/thumbs/', pictureName)}
              alt=""
              name={pictureName}
              onClick={props.openLargePicture}
            />
          </div>
        )
      })}
    </div>
  )
}

PortfolioGallery.propTypes = {
  openLargePicture: PropTypes.func
}

export default PortfolioGallery
