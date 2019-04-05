import React, { useContext } from 'react'
import GlobalContext from '../../context/globalContext'
import { REPLACE_ACTIVE_MENU_ITEM } from '../../action/globalAction'

const menuItems = [
  { label: 'Gallery', name: 'gallery' },
  { label: 'About', name: 'about' },
  // { label: 'Store', name: 'store' },
  { label: 'Contact', name: 'contact' }
]

const MenuNavigationLink = (props) => {
  const { activeMenuItem, dispatchActiveMenuItem } = useContext(GlobalContext)

  const handleChangeActiveMenuItem = (event) => {
    const nextActiveItem = event.target.name

    dispatchActiveMenuItem({
      type: REPLACE_ACTIVE_MENU_ITEM,
      newActiveMenuItem: nextActiveItem
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
