import React from 'react'
import PropTypes from 'prop-types'
import imgCloseModal from '../../resource/icon_close.svg'

const filePath = process.env.REACT_APP_FILE_PATH

const ModalLargePicture = (props) => {
  return (
    <div className={[props.className]} onClick={props.closeLargePicture}>
      {props.largePictureName.length > 0 ? (
        <>
          <img className="close-modal" src={imgCloseModal} alt="" />
          <img
            className="large-picture"
            src={filePath.concat('portfolio/', props.largePictureName)}
            alt=""
          />
        </>
      ) : (
        <></>
      )}
    </div>
  )
}

ModalLargePicture.protoTypes = {
  className: PropTypes.string,
  largePictureName: PropTypes.string,
  closeLargePicture: PropTypes.func
}

export default ModalLargePicture
