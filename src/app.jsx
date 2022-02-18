import { useMemo } from 'react';
import './App.css';
import HabitTracker from './components/habitTracker';

function App() {
  return (
    useMemo(()=>
    <HabitTracker />)
  );
}

export default App;
