import React from 'react';
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.header}>
        <h1> Simple React ToDo</h1>

        <div>
        <p>Number of TOdOs :  <span>10</span> </p>
        
        </div>


    </div>
  )
}

export default Header