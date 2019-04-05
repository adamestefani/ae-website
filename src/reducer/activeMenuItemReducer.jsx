import { REPLACE_ACTIVE_MENU_ITEM } from '../action/globalAction'

const activeMenuItemReducer = (state, action) => {
  switch (action.type) {
    case REPLACE_ACTIVE_MENU_ITEM:
      return action.newActiveMenuItem
    default:
      return state
  }
}

export default activeMenuItemReducer
