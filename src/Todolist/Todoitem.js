import React from 'react';
import classes from './Todoitem.module.css'

function Todoitem({name}) {
  return (
    <div className={classes.todo}>
        <h2>{name}</h2>
    </div>
  )
}

export default Todoitem