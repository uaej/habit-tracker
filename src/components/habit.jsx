import React, { PureComponent } from "react";

function Habit({ onIncreament, onDecreament, onDelete, habit }) {
  // inc = () => {
  //   this.props.onIncreament(this.props.habit);
  // };
  // dec = () => {
  //   this.props.onDecreament(this.props.habit);
  // };
  // del = () => {
  //   this.props.onDeleten(this.props.habit);
  // };

  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button
        className="habit-button habit-increase"
        onClick={onIncreament(habit)}
      >
        <i className="fas fa-plus-square"></i>
      </button>
      <button
        className="habit-button habit-decrease"
        onClick={onDecreament(habit)}
      >
        <i className="fas fa-minus-square"></i>
      </button>

      <button className="habit-button habit-delete" onClick={onDelete(habit)}>
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default Habit;
