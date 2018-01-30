import React from 'react';

const Title = props => {
  return(
    <div>
      <h1>Witaj w aplikacji {props.todoName}</h1>
      <p>Do zrobienia jest {props.todoCount.length} zadań</p>
    </div>

    )
}

export default Title;