import React from 'react';
import {NavLink} from 'react-router-dom';
export const Header =(props)=>{
    return(
        <div className='jumbotron header'>
            <h1>Expense Management App</h1>
            <NavLink activeClassName="active" to='/addtodo'>Add New</NavLink> 
            &nbsp;
            <strong>|</strong>
            &nbsp;
            <NavLink activeClassName="active" to='/todos'>Show All</NavLink>
           
            
        </div>
    )
}