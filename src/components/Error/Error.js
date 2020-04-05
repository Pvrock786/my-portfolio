import React from 'react'
import classes from './Error.module.css'

export default function Error() {
  return (
    <div className={classes.error}>
      <h1>Dead End!</h1>
      <p>You may look on the navigation menu above to reach the available routes.</p>
    </div>
  )
}
