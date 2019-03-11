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
      </div>
    )
  }
}
