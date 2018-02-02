import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title.js";
import TodoList from "../components/TodoList.js";
import TodoForm from "../components/TodoForm.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      data: [
        {
          id: 1,
          text: "clean room"
        },
        {
          id: 2,
          text: "wash the dishes"
        },
        {
          id: 3,
          text: "feed my cat"
        }
      ]
    };
  }

  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4()
    };
    const data = [...this.state.data, todo];
    this.setState({ data });
  }

  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({ data: remainder });
  }

  onChangeHandle(event) {
    this.setState({
      value: event.target.value
    });
  }

  onSubmitHandle(event) {
    event.preventDefault();
    this.addTodo(this.state.value);
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title todoName="ToDo" todoCount={this.state.data.length} />
        <TodoForm
          value={this.state.value}
          onChangeHandle={this.onChangeHandle.bind(this)}
          onSubmitHandle={this.onSubmitHandle.bind(this)}
        />
        <TodoList todoList={this.state.data} />
      </div>
    );
  }
}

export default App;
