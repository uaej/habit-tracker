import React, { Component, PureComponent } from "react";

function Navbar({activeCnt}) {
    return (
      <div>
        <nav className="habit-header">
          <i className="navbar-logo fas fa-leaf"></i>
          <p className="habit-title">Habit Tracker</p>
          <p className="habit-sum">{activeCnt}</p>
        </nav>
      </div>
    );
}

export default Navbar;
