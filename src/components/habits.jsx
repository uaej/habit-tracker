import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
  render() {
    return (
      <ul>
        {
        this.props.habits.map((i) => (
          <Habit
            key={i.id}
            habit={i}
            onIncreament={this.props.handleIncrease}
            onDecreament={this.props.handleDecrease}
            onDeleten={this.props.handleDelete}
          />
        ))}
      </ul>
    );
  }
}

export default Habits;
