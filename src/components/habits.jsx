import React, { Component } from "react";

class Habits extends Component {
  state = {
    count: 0,
  };
  handleIncrease = (event) =>{
      console.log(event);
      this.setState({count: this.state.count + 1})
  }

  handleDecrease = (event) =>{
    console.log(event);
    this.setState({count : this.state.count <= 0 ? 0 : this.state.count - 1});
}
  render() {
    return (
      <li className="habit">
        <span className="habit-name">aa</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrease}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habits;
