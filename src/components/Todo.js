import React from "react";
import style from "./Todo.css";

const Todo = props => (
  <div>
    <p>{this.props.item.text}</p>
    <button className="removeButton" onClick={() => props.removeTodo(item.id)}>
      Usuń
    </button>
  </div>
);

export default Todo;