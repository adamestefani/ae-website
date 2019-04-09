import React, { useContext } from 'react'
import GlobalContext from '../../../context/globalContext'

const About = (props) => {
  const { activeMenuItem } = useContext(GlobalContext)

  return (
    <div
      className={
        activeMenuItem === 'about' ? 'page-content target' : 'page-content'
      }
    >
      <h1 className="page-title">About</h1>
      <div className="about-area">
        <div className="about-picture">
          <img
            src={`${process.env.PUBLIC_URL}/portfolio/thumbs/img_017.jpg`}
            alt=""
          />
        </div>
        <div className="about-text">
          <h1>
            Hello! <br /> My name is Adam Estefani
          </h1>
          <p>
            I was born and raised in São Paulo-Brazil and now I call Toronto
            home. I'm an urban photographer who loves everything about it,
            exploring the city on a sunny day or challenging unpleasant weather
            conditions.
          </p>
          <p>
            I appreciate the challenges of capturing a good image, finding the
            right angle, the right lighting, experimenting new ideas and moving
            away from the comfort zone.
          </p>
          <p>
            It's really interesting to me that anything can change dramatically
            if you just look at it from another view point, and I'm grateful for
            the new perspectives that photography gives me every day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
