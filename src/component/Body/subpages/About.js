import React from 'react'

export default class About extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.activeMenuItem === 'about'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className={'page-title'}>About</h1>
        <div className="about-area">
          <div className="about-picture">
            <img src="" alt="" />
          </div>
          <div className="about-text">
            <h1>
              Hello! <br /> My name is Adam Estefani
            </h1>
            <p>
              I was born and raised in São Paulo-Brazil and now I call Toronto
              home. I'm an urban photographer who loves everything related with
              that, exploring the city on a sunny day or challenging umplesent
              weather conditions.
            </p>
            <p>
              I appreciate the challenges of creating an image, finding the
              right angle, the right lighting, experimenting new ideas and
              moving away from the comfort zone.
            </p>
            <p>
              It's really interesting to me that anything can change
              dramatically if you just look from another view point, and I'm
              grateful for the new perspectives that photography gives me every
              day.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
