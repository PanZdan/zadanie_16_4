import React from 'react';
import style from './Todo.css';

const Todo = props => (
  <div>
    <form onSubmit={props.onSubmitHandle}>
      <input type="text" value={props.value} onChange={props.onChangeHandle}/>
      <input type="submit" value="Dodaj"/>
    </form>
    <button className="removeButton" onClick={()=>props.removeTodo(item.id)}>Usuń</button>
  </div>
);

export default Todo;