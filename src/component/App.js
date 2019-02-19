import React from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route
            render={({ location }) => (
              <div>
                <Header />
                <Body location={location}/>
              </div>
            )}
          />
        </div>
      </Router>
    )
  }
}
