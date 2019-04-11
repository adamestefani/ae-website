import {
  TOGGLE_SIDE_MENU_BAR,
  DEACTIVATE_SIDE_MENU_BAR
} from '../action/globalAction'

const enableBodyScroll = () => {
  document.body.classList.remove('disable-scroll')
  document.documentElement.classList.remove('disable-scroll')
}
const disableBodyScroll = () => {
  document.body.classList.add('disable-scroll')
  document.documentElement.classList.add('disable-scroll')
}

const sideMenuBarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU_BAR:
      state ? enableBodyScroll() : disableBodyScroll()
      return !state

    case DEACTIVATE_SIDE_MENU_BAR:
      enableBodyScroll()
      return false

    default:
      return state
  }
}

export default sideMenuBarReducer
