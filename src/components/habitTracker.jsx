import React, {
  useEffect,
  useMemo,
  useState,
} from "react";
import HabitAddForm from "./HabitAddForm";
import Habits from "./habits";
import Navbar from "./navbar";

function HabitTracker() {
  const [habits, setState] = useState([]);
  useEffect(()=>{
    //초기 진입 시 local db의 값을 표시함. 
    const item = window.localStorage.getItem('habits');
    setState(JSON.parse(item));
  }, []);
  useEffect(() => {
    //habits state가 변경될 경우 locladb에 업데이트 함.
    window.localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleIncrease = (habit) => {
    const h = habits.map((item) => {
      if (item.id === habit.id) {
        return { ...item, count: item.count + 1 };
      } else {
        return item;
      }
    });
    setState(h);
  };

  const handleDecrease = (habit) => {
    const h = habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count > 0 ? count : 0 };
      } else {
        return item;
      }
    });
    setState(h);
  };

  const handleDelete = (habit) => {
    const h = [...habits]; //새로운 배열으로 habits의 item을 복사한다.
    const index = h.indexOf(habit);
    h.splice(index, 1);
    setState(h);
  };

  const resetList = (event) => {
    event.preventDefault();
    const h = habits.map((d) => {
      if (d.count != 0) {
        return { ...d, count: 0 };
      } else {
        return d;
      }
    });
    setState(h);
  };

  const addList = (name) => {
    const h = [...habits]; //새로운 배열으로 habits의 item을 복사한다.
    h.push({ id: Date.now(), name: name, count: 0 });
    setState(h);
  };

  return (
    <>
      <Navbar activeCnt={(habits == null?  0 : habits.filter((item) => item.count > 0).length)} />
      <HabitAddForm onAdd={addList} />
      {
        useMemo(()=>
        <Habits
        habits={habits}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleDelete={handleDelete}
        handleReset={resetList}
      />  
  )
      }
          </>
  );
}

export default HabitTracker;
