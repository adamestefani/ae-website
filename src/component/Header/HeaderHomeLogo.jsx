import React from 'react'
import { PropTypes } from 'prop-types'

const HeaderHomeLogo = (props) => {
  return (
    <div className={'home-link'}>
      <a
        href={'#home'}
        name={'home'}
        onClick={props.handleChangeActiveMenuItem}
      >
        <div className={'home-title'}>website</div>
        <div className={'home-subtitle'}>{'slogan & something else'}</div>
      </a>
    </div>
  )
}

HeaderHomeLogo.propTypes = {
  handleChangeActiveMenuItem: PropTypes.func,
  activeMenuItem: PropTypes.string
}

export default HeaderHomeLogo
