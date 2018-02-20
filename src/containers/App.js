import React from "react";
import style from "./App.css";
import uuid from "uuid";
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
    if (this.state.value !== "") {
      this.addTodo(this.state.value);
    }
    if (this.state.value) {
      this.state.value = "";
    }
  }

  render() {
    return (
      <div className={style.TodoApp}>
        <Title
          className={style.Title}
          todoName="ToDo"
          todoCount={this.state.data.length}
        />
        <TodoForm
          className={style.TodoForm}
          value={this.state.value}
          onChangeHandle={this.onChangeHandle.bind(this)}
          onSubmitHandle={this.onSubmitHandle.bind(this)}
        />
        <TodoList
          className={style.TodoList}
          todoList={this.state.data}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default App;