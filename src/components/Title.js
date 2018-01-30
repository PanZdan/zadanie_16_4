import React from 'react';

const Title = props => (
    <div>
      <h1>Witaj w aplikacji {props.todoName}</h1>
      <p>Do zrobienia jest {props.todoCount} zadań</p>
    </div>
);

export default Title;