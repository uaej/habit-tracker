import React, { Component, PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from "./HabitAddForm";

class Habits extends PureComponent {
  handleIncrement = habit => {
    this.props.handleIncrease(habit);
  };

  handleDecrement = habit => {
    this.props.handleDecrease(habit);
  };

  handleDelete = habit => {
    this.props.handleDelete(habit);
  };
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map(i => (
            <Habit
              key={i.id}
              habit={i}
              onIncreament={this.handleIncrement}
              onDecreament={this.handleDecrement}
              onDeleten={this.handleDelete}
            />
          ))}
        </ul>

        <button className="habit-manage-btn" onClick={this.props.handleReset}>
          Reset All
        </button>
      </>
    );
  }
}

export default Habits;
