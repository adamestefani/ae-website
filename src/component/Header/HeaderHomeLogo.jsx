import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import { REPLACE_ACTIVE_MENU_ITEM } from '../../action/globalAction'

const HeaderHomeLogo = (props) => {
  const { dispatchActiveMenuItem } = useContext(GlobalContext)

  const handleChangeActiveMenuItem = (event) => {
    const nextActiveItem = event.target.id

    dispatchActiveMenuItem({
      type: REPLACE_ACTIVE_MENU_ITEM,
      newActiveMenuItem: nextActiveItem
    })
  }

  return (
    <div className={'home-link'}>
      <a href={'#home'} name={'home'} onClick={handleChangeActiveMenuItem}>
        <div id={'home'} className={'home-title'}>
          website
        </div>
        <div id={'home'} className={'home-subtitle'}>
          {'slogan & something else'}
        </div>
      </a>
    </div>
  )
}

export default HeaderHomeLogo
