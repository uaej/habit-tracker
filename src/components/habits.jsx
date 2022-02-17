import React, { Component, PureComponent } from "react";
import Habit from "./habit";
import HabitAddForm from "./HabitAddForm";

function Habits({handleIncrease, handleDecrease, handleDelete, handleReset, habits}) {
    return (
      <>
        <ul>
          {habits.map(i => (
            <Habit
              key={i.id}
              habit={i}
              onIncreament={handleIncrease}
              onDecreament={handleDecrease}
              onDelete={handleDelete}
            />
          ))}
        </ul>

        <button className="habit-manage-btn" onClick={handleReset}>
          Reset All
        </button>
      </>
    );
}

export default Habits;
