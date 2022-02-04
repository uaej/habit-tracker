import React, { Component } from "react";
import Habits from "./habits";

class HabitTracker extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrease = (habit) => {
    const habits = [...this.state.habits]; //새로운 배열으로 habits의 item을 복사한다.
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrease = (habit) => {
    const habits = [...this.state.habits]; //새로운  배열으로 habits의 item을 복사한다.
    const index = habits.indexOf(habit);
    habits[index].count > 0 ? habits[index].count-- : (habits[index].count = 0);
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits]; //새로운  배열으로 habits의 item을 복사한다.
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits: habits });
  };

  resetList = (event) => {
    event.preventDefault();
    this.setState({ habits: [] });
  };

  addList = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const habitTitle = event.target[0].value;
    const habits = [...this.state.habits];
    habits.push({ id: habits.length, name: habitTitle, count: 0 });
    console.log(habits);
    this.setState({habits: habits});
  };

  render() {
    return (
      <>
        <header className="habit-header">
            <p className="habit-title">Habit Tracker</p>
            <p className="habit-sum">{this.state.habits.length}</p>
        </header>
        <form onSubmit={this.addList}>
          <input className="habit-input" name="habit" type="string"></input>
          <button className="habit-manage-btn">add</button>
        </form>
        <Habits
          habits={this.state.habits}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleDelete={this.handleDelete}
        />
        <button className="habit-manage-btn" onClick={this.resetList}>Reset All</button>
      </>
    );
  }
}

export default HabitTracker;
