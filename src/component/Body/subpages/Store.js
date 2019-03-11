import React from 'react'

export default class Store extends React.Component {
  render() {
    return (
      <div
        className={
          this.props.activeMenuItem === 'store'
            ? 'page-content target'
            : 'page-content'
        }
      >
        <h1 className={'page-title'}>Store</h1>
      </div>
    )
  }
}
