import React, { Component } from "react";
import HabitAddForm from "./HabitAddForm";
import Habits from "./habits";
import Navbar from "./navbar";

class HabitTracker extends Component {
  state = {
    habits: [],
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
    const h = [...this.state.habits];
    h.map((d) => (
      d.count = 0
      ))
    this.setState({ habits: h });
  };

  addList=(name)=>{
    console.log("addList " + name);
    const habits = [...this.state.habits]; //새로운  배열으로 habits의 item을 복사한다.
    habits.push({id: Date.now(), name: name, count: 0})
    this.setState({habits});
  }

  render() {
    return (
      <>
        <Navbar
          activeCnt={this.state.habits.filter((item) => item.count > 0).length}
        />
        <HabitAddForm onAdd={this.addList}/>
        
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
