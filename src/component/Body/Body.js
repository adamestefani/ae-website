import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Gallery, About, Store, Contact } from './subpages/Subpages'
import { PropTypes } from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <TransitionGroup>
          <CSSTransition
            key={this.props.location.key}
            classNames="fade"
            timeout={250}
          >
            <Switch location={this.props.location}>
              <Route exact path={'/'} component={Home} />
              <Route exact path={'/gallery'} component={Gallery} />
              <Route exact path={'/about'} component={About} />
              <Route exact path={'/store'} component={Store} />
              <Route exact path={'/contact'} component={Contact} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

Body.propTypes = {
  location: PropTypes.object.isRequired
}
