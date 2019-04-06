import {
  TOGGLE_SIDE_MENU_BAR,
  DEACTIVATE_SIDE_MENU_BAR
} from '../action/globalAction'

const sideMenuBarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU_BAR:
      state
        ? document.body.classList.remove('disable-scroll')
        : document.body.classList.add('disable-scroll')
      return !state

    case DEACTIVATE_SIDE_MENU_BAR:
      document.body.classList.remove('disable-scroll')
      return false

    default:
      return state
  }
}

export default sideMenuBarReducer
