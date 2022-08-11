import React, { useContext } from 'react';
import { TodoContext } from '../Todo-context/TodoContext';
import classes from './Header.module.css'

function Header() {
  const [todos] = useContext(TodoContext);

  const todosNumber = todos.length;
  return (
    <div className={classes.header}>
        <h1> Simple React ToDo</h1>

        <div>
        <p>Number of TOdOs :  <span>{todosNumber}</span> </p>
        
        </div>


    </div>
  )
}

export default Header