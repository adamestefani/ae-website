import { createContext } from 'react'

const initialState = {
  activeMenuItem: 'home',
  dispatchActiveMenuItem: () => {},
  sideMenuBarActive: false,
  dispatchSideMenuBar: () => {}
}

const GlobalContext = createContext(initialState)

export default GlobalContext
