import React from 'react';
import Todoitem from './Todoitem';
import classes from './Todolist.module.css'

const DUMMY_TODOS = [
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
        id: 't3',
        name: 'Attend some works seminars '
    }
]

function Todolist() {
  return (
    <div className={classes.todos}>
        {DUMMY_TODOS.map(todo =>
        <Todoitem name={todo.name}/> )}

    </div>
  )
}

export default Todolist