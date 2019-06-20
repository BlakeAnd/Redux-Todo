import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../actions";
import "./component.css";
class TodoList extends React.Component {
state = {
  newTodo: ''
};


handleChange = e => {
  console.log(this.props);
  this.setState({newTodo: e.target.value});
}

handleAdd = e => {
  e.preventDefault();
  this.props.addTodo(this.state.newTodo);
  this.setState({ newTodo: ""})
}

handleToggle = e => {

}

render(){
  return(
    <div className="list">
      {console.log("props", this.props)}
      {console.log("state", this.state)}
      {console.log("value", this.props.todos.value)}
      <h1>TODO LIST</h1>
      <div>{this.props.todos.map(e => (
        <div className="item">
          <p>{e.value}</p>
          <button onClick="handleToggle">check off</button>
        </div>
      ))}</div>
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
  { addTodo }
)(TodoList);