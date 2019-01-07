import React from 'react'
import {Route} from 'react-router-dom'
import Gallery from './Gallery'
import Home from "./Home"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} component={Home}/>
        <Route path={'/gallery'} component={Gallery}/>
      </div>
    )
  }
}