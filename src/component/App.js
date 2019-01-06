import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
      </div>
    )
  }
}