import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Gallery, Home } from './subpages/Subpages'
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
              <Route path={'/gallery'} component={Gallery} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    )
  }
}

Body.propTypes = {
  location: PropTypes.any.isRequired
}
