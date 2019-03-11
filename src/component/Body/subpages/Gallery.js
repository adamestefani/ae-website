import React from 'react'
import PropTypes from 'prop-types'
import test1 from '../../../resource/test-1.jpg'
import test2 from '../../../resource/test-2.jpg'
import test3 from '../../../resource/test-3.jpg'
import test4 from '../../../resource/test-4.jpg'
import test5 from '../../../resource/test-5.jpg'
import test6 from '../../../resource/test-6.jpg'

const galleryContent = [
  { fileName: 'test-1', filePath: test1, width: '1' },
  { fileName: 'test-2', filePath: test2, width: '1' },
  { fileName: 'test-4', filePath: test4, width: '2' },
  { fileName: 'test-3', filePath: test3, width: '2' },
  { fileName: 'test-5', filePath: test5, width: '2' },
  { fileName: 'test-6', filePath: test6, width: '1' }
]

export default class Gallery extends React.Component {
  renderGallery() {
    return (
      <div className="gallery-grid">
        {galleryContent.map((file, index) => {
          return (
            <img
              className="gallery-item"
              key={index}
              src={file.filePath}
              alt={file.fileName}
            />
          )
        })}
      </div>
    )
  }

  render() {
    return (
      <div
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
