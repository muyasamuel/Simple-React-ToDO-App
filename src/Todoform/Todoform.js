import React from 'react';
import classes from './Todoform.module.css'

function Todoform() {
  return (
    <form className={classes.form}>
        <input type='text'  placeholder='Add your todo'/>
        <button>Add Todo</button>
    </form>
 
  )
}

export default Todoform