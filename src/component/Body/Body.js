import React from 'react'
import BackgroundImage from './BackgroundImage'
import {Route} from 'react-router-dom'
import Gallery from './Gallery'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path={'/'} component={BackgroundImage}/>
        <Route path={'/gallery'} component={Gallery}/>
      </div>
    )
  }
}