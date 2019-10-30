import React from 'react';
import {TodoItem} from './TodoItem';
export const Todos=(props)=>{
    
    return(
    <div>
        <ul>
        {props.todos.map((todo)=><TodoItem key={todo.id} markComplete={props.markComplete} todo={todo} />)}
        
    </ul>
    </div>)
}