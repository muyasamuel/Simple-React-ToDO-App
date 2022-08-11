import React, { useState } from 'react';
import Todoitem from './Todoitem';
import classes from './Todolist.module.css'

 

function Todolist() {

   const [todos, setTodos] =  useState([
    {
        id: 't1',
        name: 'Do my react projects as planned '
    },
    {
        id: 't2',
        name: 'Go to the mall and get myself a new laptop '
    },
    {
        id: 't3',
        name: 'Go for aome household shopiing '
    },
    {
        id: 't4',
        name: 'Finish all my school assignments'
    },
    {
        id: 't5',
        name: 'Attend some works seminars '
    }
]);



  return (
    <div className={classes.wrapper}>
        {todos.map(todo =>
        <Todoitem name={todo.name} key={todo.id}   /> )}

    </div>
  )
}

export default Todolist