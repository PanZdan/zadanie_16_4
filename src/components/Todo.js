import React from 'react';
import style from './Todo.css';

const Todo = props => (
  <div>
    <p>{item.text}</p>
    button className="removeButton" onClick={()=>props.removeTodo(item.id)}>Usuń</button>
  </div>
);

export default Todo;