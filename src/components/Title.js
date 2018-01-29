import React from 'react';

class Title extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div>
        <p>Witamy w aplikacji {this.props.todoName}</p>
        <p>Do zrobienia {this.props.todoCount.length} zadań.</p>
      </div>
      )
  }
}

export default Title;