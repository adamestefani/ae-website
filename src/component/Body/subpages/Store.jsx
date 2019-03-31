import React from 'react'

const Store = (props) => {
  return (
    <div
      className={
        props.activeMenuItem === 'store'
          ? 'page-content target'
          : 'page-content'
      }
    >
      <h1 className={'page-title'}>Store</h1>
    </div>
  )
}
export default Store
