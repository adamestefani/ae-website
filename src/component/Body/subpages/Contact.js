import React from 'react'

export default class Contact extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.activeMenuItem === 'contact'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className={'page-title'}>Contact</h1>
      </div>
    )
  }
}
