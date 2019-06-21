import React from "react";
import { connect } from "react-redux";

import { addTodo, toggle } from "../actions";
import "./component.css";
class TodoList extends React.Component {
state = {
  newTodo: ''
};


handleChange = e => {
  console.log(this.props);
  e.preventDefault();
  this.setState({newTodo: e.target.value});
}

handleAdd = e => {
  e.preventDefault();
  this.props.addTodo(this.state.newTodo);
  this.setState({ newTodo: ""})
}

handleToggle = (e, index) => {
  e.preventDefault();
  this.props.toggle(index);
}

render(){
  return(
    <div >
      {console.log("props", this.props)}
      {console.log("state", this.state)}
      {console.log("value", this.props.todos.value)}
      <h1>TODO LIST</h1>
      <div>
        {this.props.todos.map((e, index) => (
        <div 
        className="item"
        key={index}
        style = {e.completed ? {background: "black"} : null}
        onClick={e => this.handleToggle(e, index)}
        >
          {e.value}
          {e.completed}

          {console.log("completed", e.completed)}
          {console.log("index", index)}
          <button >check off</button>
        </div>
      ))}
      </div>
      <form onSubmit={this.handleAdd}>
        <input 
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="new todo"
        />
        <button>add</button>
      </form>
    </div>
  );
}

}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.todos  
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggle }
)(TodoList);