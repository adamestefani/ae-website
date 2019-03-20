import React from 'react'
import PropTypes from 'prop-types'

const filePath = 'https://s3.amazonaws.com/adamestefaniphoto/'
const gallery = new Array(24).fill(undefined).map((_, index) => index + 1)

export default class Gallery extends React.Component {
  renderGallery() {
    return (
      <div className="gallery-grid">
        {gallery.map((value, index) => {
          return (
            <img
              className="gallery-item"
              key={index}
              src={filePath.concat(
                'portfolio/thumbs/img_',
                '000'.substring(String(value).length, 3),
                value,
                '.jpg'
              )}
              alt=""
            />
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div
        id="gallery"
        className={
          this.props.activeMenuItem === 'gallery'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className={'page-title'}>Gallery</h1>
        {this.renderGallery()}
      </div>
    )
  }
}

Gallery.propTypes = {
  activeMenuItem: PropTypes.string
}
