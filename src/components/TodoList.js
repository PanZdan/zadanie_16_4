import React from "react";

const TodoList = props => (
  <div>
    <p>Lista zadań</p>
    <ul>{props.todoList.map(item => <li key={item.id}>{item.text}</li>)}</ul>
  </div>
);

export default TodoList;
