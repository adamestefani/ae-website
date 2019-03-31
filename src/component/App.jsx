import React, { useState } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Body/Footer'

const App = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('home')

  const handleChangeActiveMenuItem = (event) => {
    let nextActiveItem = event.target.name
    if (!nextActiveItem) {
      nextActiveItem = 'home'
    }
    setActiveMenuItem(nextActiveItem)
  }

  return (
    <>
      <Header
        handleChangeActiveMenuItem={handleChangeActiveMenuItem}
        activeMenuItem={activeMenuItem}
      />
      <Body activeMenuItem={activeMenuItem} />
      <Footer activeMenuItem={activeMenuItem} />
    </>
  )
}

export default App
