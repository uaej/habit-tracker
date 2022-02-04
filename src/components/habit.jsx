import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };

  handleIncrease= (event)=>{
    const fun = this.props.onIncreament;
    fun(this.props.habit);
  }

  handleDecrease= (event)=>{
    const fun = this.props.onDecreament;
    fun(this.props.habit);
  }

  handleDetele= (event)=>{
    const fun = this.props.onDeleten;
    fun(this.props.habit);
  }
  
  render() {
    const {name, count, key} = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrease}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrease}>
          <i className="fas fa-minus-square"></i>
        </button>

        <button className="habit-button habit-delete" onClick={this.handleDetele}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
