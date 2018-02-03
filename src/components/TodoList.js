import React from 'react';
import style from './TodoList.css';

const TodoList = props => (
    <div>
      <p>Lista zadań:</p> 
      <ul>{props.todoList.map(item => 
        <li key={item.id}>{item.text}
        <button className="removeButton" onClick={()=>props.removeTodo(item.id)}>Usuń</button>
        </li>)}
      </ul>
    </div>
);

export default TodoList;