import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import {
  REPLACE_ACTIVE_MENU_ITEM,
  DEACTIVATE_SIDE_MENU_BAR
} from '../../action/globalAction'

const menuItems = [
  { label: 'Gallery', name: 'gallery' },
  { label: 'About', name: 'about' },
  // { label: 'Store', name: 'store' },
  { label: 'Contact', name: 'contact' }
]

const MenuNavigationLink = (props) => {
  const {
    activeMenuItem,
    dispatchActiveMenuItem,
    dispatchSideMenuBar
  } = useContext(GlobalContext)

  const handleChangeActiveMenuItem = (event) => {
    const nextActiveItem = event.target.name

    dispatchActiveMenuItem({
      type: REPLACE_ACTIVE_MENU_ITEM,
      newActiveMenuItem: nextActiveItem
    })

    dispatchSideMenuBar({
      type: DEACTIVATE_SIDE_MENU_BAR
    })
  }

  return menuItems.map((item) => {
    return (
      <a
        href={`#${item.name}`}
        onClick={handleChangeActiveMenuItem}
        className={'menu-links-item'.concat(
          activeMenuItem === item.name ? ' active' : ''
        )}
        key={item.name}
        id={`menu-item-${item.name}`}
        name={item.name}
      >
        {item.label}
      </a>
    )
  })
}

export default MenuNavigationLink
