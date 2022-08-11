import { createContext , useState } from 'react';

export const TodoContext = createContext();
 


export const TodoProvider = (props) => {
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
        <TodoContext.Provider value={[todos , setTodos]}>
            {props.children}

        </TodoContext.Provider>

    );
}