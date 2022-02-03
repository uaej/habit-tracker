import React, { Component } from 'react';

class Habits extends Component {
    render() {
        return (
            <li className='habit'>
                <span className="habit-name">aa</span>
                <span className="habit-count"></span>
                <button className="habit-button habit-increase">
                <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease">
                <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
                </button>
                
            </li>
        );
    }
}

export default Habits;