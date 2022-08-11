import React, { useContext } from 'react';
import { TodoContext } from '../Todo-context/TodoContext';
import Todoitem from './Todoitem';
import classes from './Todolist.module.css'

 

function Todolist() {
   const [todos ] = useContext(TodoContext)


  return (
    <div className={classes.wrapper}>
        {todos.map(todo =>
        <Todoitem name={todo.name} key={todo.id}   /> )}

    </div>
  )
}

export default Todolist