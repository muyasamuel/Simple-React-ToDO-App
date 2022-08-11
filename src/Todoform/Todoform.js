import React, { useState } from 'react';
import classes from './Todoform.module.css'

function Todoform() {
  const [todo , setTodo ] = useState("");


  const todoChangeHandler = (e) => {
    setTodo(e.target.value);

  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(todo);

    setTodo("");

  }


  return (
    <form className={classes.form} onSubmit={onSubmit}>
        <input type='text'  placeholder='Add your todo' value={todo} onChange={todoChangeHandler}/>
        <button className={classes.actions}>Add Todo</button>
    </form>
 
  )
}

export default Todoform