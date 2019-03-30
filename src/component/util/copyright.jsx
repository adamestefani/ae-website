import React from 'react'

const Copyright = (props) => {
  return (
    <div className={props.className}>
      &copy; {new Date().getFullYear()} Adam Estefani. All rights reserved.
    </div>
  )
}

export default Copyright
