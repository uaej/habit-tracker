import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="habit-header">
          <i className="navbar-logo fas fa-leaf"></i>
          <p className="habit-title">Habit Tracker</p>
          <p className="habit-sum">{this.props.activeCnt}</p>
        </nav>
      </div>
    );
  }
}

export default Navbar;
