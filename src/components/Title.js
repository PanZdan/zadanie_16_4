import React from "react";
import style from "./Title.css";

const Title = props => (
  <div>
    <h1>Witaj w aplikacji {props.todoName}</h1>
    <p>Masz do zrobienia {props.todoCount} zadania.</p>
  </div>
);

export default Title;