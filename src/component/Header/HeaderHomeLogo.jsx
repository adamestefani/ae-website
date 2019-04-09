import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import {
  REPLACE_ACTIVE_MENU_ITEM,
  DEACTIVATE_SIDE_MENU_BAR
} from '../../action/globalAction'

const HeaderHomeLogo = (props) => {
  const { dispatchActiveMenuItem, dispatchSideMenuBar } = useContext(
    GlobalContext
  )

  const handleChangeActiveMenuItem = (event) => {
    const nextActiveItem = event.target.id

    dispatchActiveMenuItem({
      type: REPLACE_ACTIVE_MENU_ITEM,
      newActiveMenuItem: nextActiveItem
    })

    dispatchSideMenuBar({
      type: DEACTIVATE_SIDE_MENU_BAR
    })
  }

  return (
    <div className={'home-link'}>
      <a href={'#home'} name={'home'} onClick={handleChangeActiveMenuItem}>
        <div id={'home'} className={'home-title'}>
          adam estefani
        </div>
        <div id={'home'} className={'home-subtitle'}>
          {'Urban & lifestyle photography'}
        </div>
      </a>
    </div>
  )
}

export default HeaderHomeLogo
