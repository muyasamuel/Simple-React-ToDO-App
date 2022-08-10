import React from 'react';

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
    <div>
        {DUMMY_TODOS.map(todo =>
            <li>{todo.name}</li>)}

    </div>
  )
}

export default Todolist