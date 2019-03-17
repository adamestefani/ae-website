import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Body/Footer'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activeMenuItem: 'home'
    }

    this.handleChangeActiveMenuItem = this.handleChangeActiveMenuItem.bind(this)
  }

  handleChangeActiveMenuItem(event) {
    let nextActiveItem = event.target.name
    if (!nextActiveItem) {
      nextActiveItem = 'home'
    }
    this.setState({
      activeMenuItem: nextActiveItem
    })
  }

  render() {
    return (
      <>
        <Header
          handleChangeActiveMenuItem={this.handleChangeActiveMenuItem}
          activeMenuItem={this.state.activeMenuItem}
        />
        <Body activeMenuItem={this.state.activeMenuItem} />
        <Footer activeMenuItem={this.state.activeMenuItem} />
      </>
    )
  }
}
