import React from 'react'

const homeStyle = {
  float: 'left',
  padding: '15px',
}

const homeNameStyle = {
  color: 'rgb(255,255,255)',
  fontSize: '32px',
  fontWeight: '700',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  padding: '0px',
  margin: '0px',
  textAlign: 'left',
}

const homeSubtitleStyle = {
  fontSize: '9px',
  textTransform: 'uppercase',
  fontWeight: '300',
  letterSpacing: '1px',
  display: 'block'
}

export default class HeaderHomeLogo extends React.Component {
  render() {
    return (
      <div style={homeStyle}>
        <a href={'/'}>
          <h1 style={homeNameStyle}>
            adam estefani
            <span style={homeSubtitleStyle}>landscape, urban & lifestyle photography</span>
          </h1>
        </a>
      </div>
    )
  }
}