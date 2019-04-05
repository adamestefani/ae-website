import React, { useReducer } from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './body/Footer'
import activeMenuItemReducer from '../reducer/activeMenuItemReducer'
import GlobalContext from '../context/globalContext'
import sideMenuBarReducer from '../reducer/sideMenuBarReducer'
import SideBarMenu from './header/sideBarMenu'

const App = () => {
  const [activeMenuItem, dispatchActiveMenuItem] = useReducer(
    activeMenuItemReducer,
    'home'
  )
  const [sideMenuBarActive, dispatchSideMenuBar] = useReducer(
    sideMenuBarReducer,
    false
  )

  return (
    <GlobalContext.Provider
      value={{
        activeMenuItem,
        dispatchActiveMenuItem,
        sideMenuBarActive,
        dispatchSideMenuBar
      }}
    >
        <Header />
        <SideBarMenu />
        <Body />
        <Footer />
    </GlobalContext.Provider>
  )
}

export default App
