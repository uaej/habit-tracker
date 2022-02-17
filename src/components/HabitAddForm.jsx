import React, { PureComponent } from "react";

function HabitAddForm({onAdd}) {
  const inputRef = React.createRef();
  const formRef = React.createRef();

  const addList = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name &&onAdd(name); //name 의 값이 undefinded가 아닐때 onAdd 호출
    formRef.current.reset();
  };

  return (
    <div>
      <form onSubmit={addList} ref={formRef}>
        <input
          className="habit-input"
          placeholder="enter your habit:)"
          type="string"
          ref={inputRef}
        ></input>
        <button className="habit-manage-btn">add</button>
      </form>
    </div>
  );
}

export default HabitAddForm;
