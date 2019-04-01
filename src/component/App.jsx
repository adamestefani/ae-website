import React, { useState } from 'react'
import Header from './header/Header'
import Body from './body/Body'
import Footer from './body/Footer'

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
