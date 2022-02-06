import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef();
  formRef = React.createRef();

  addList = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); //name 의 값이 undefinded가 아닐때 onAdd 호출
    this.formRef.current.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addList} ref={this.formRef}>
          <input
            className="habit-input"
            placeholder="enter your habit:)"
            type="string"
            ref={this.inputRef}
          ></input>
          <button className="habit-manage-btn">add</button>
        </form>
      </div>
    );
  }
}

export default HabitAddForm;
