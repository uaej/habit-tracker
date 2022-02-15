import React, { Component, PureComponent } from "react";
import HabitAddForm from "./HabitAddForm";
import Habits from "./habits";
import Navbar from "./navbar";

class HabitTracker extends Component {
  state = {
    habits: [],
  };

  handleIncrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        item.count = item.count + 1;
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits : habits });
  };

  handleDecrease = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...item, count: count > 0 ? count : 0 };
      }else{
        return item;
      }
    });
    this.setState({ habits: habits });
  };

  handleDelete = (habit) => {
    const habits = [...this.state.habits]; //새로운 배열으로 habits의 item을 복사한다.
    const index = habits.indexOf(habit);
    habits.splice(index, 1);
    this.setState({ habits: habits });
  };

  resetList = (event) => {
    event.preventDefault();
    const h = this.state.habits;
    const li = h.map((d) => {
      if (d.count != 0) {
        return { ...d, count: 0 };
      }else {
        return d;
      }
    });
    this.setState({ habits: li });
  };

  addList = (name) => {
    console.log("addList " + name);
    const habits = [...this.state.habits]; //새로운  배열으로 habits의 item을 복사한다.
    habits.push({ id: Date.now(), name: name, count: 0 });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          activeCnt={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAddForm onAdd={this.addList} />
        <Habits
          habits={this.state.habits}
          handleIncrease={this.handleIncrease}
          handleDecrease={this.handleDecrease}
          handleDelete={this.handleDelete}
          handleReset={this.resetList}
        />
      </>
    );
  }
}

export default HabitTracker;
