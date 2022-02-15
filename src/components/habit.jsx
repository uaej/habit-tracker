import React, { PureComponent } from "react";

class Habit extends PureComponent {

  inc = () => {
    this.props.onIncreament(this.props.habit);
  };
  dec = () => {
    this.props.onDecreament(this.props.habit);
  };
  del = () => {
    this.props.onDeleten(this.props.habit);
  };

  render() {
    return (
      <li className="habit" >
        <span className="habit-name">{this.props.habit.name}</span>
        <span className="habit-count">{this.props.habit.count}</span>
        <button className="habit-button habit-increase" onClick={this.inc}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.dec}>
          <i className="fas fa-minus-square"></i>
        </button>

        <button className="habit-button habit-delete" onClick={this.del}>
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
