import React, { useContext } from 'react'
import BackgroundImage from '../BackgroundImage'
import GlobalContext from '../../../context/globalContext'

const Home = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)

  return (
    <>
      <BackgroundImage
        className={
          activeMenuItem === 'home'
            ? 'home-background'
            : 'home-background fade-background-out'
        }
      />
    </>
  )
}

export default Home
