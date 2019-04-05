import { TOGGLE_SIDE_MENU_BAR } from '../action/globalAction'

const sideMenuBarReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_SIDE_MENU_BAR:
      document.body.classList.toggle('disable-scroll')
      return !state
    default:
      return state
  }
}

export default sideMenuBarReducer
