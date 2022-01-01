import './App.css';
import { Timer } from './components/Timer';
import {useState, useEffect } from 'react';

function App() {
  const [beginTimer, setBeginTimer] = useState(false);
  const [timings, setTimings] = useState({
    start: 0,
    end: 0
  })

  const updateTimer = (e) => {
    setTimings({
      ...timings,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="App">
      <label>Start time</label>
      <input type = "Number" name = 'start' onChange = {(e) => { updateTimer(e)} } />

      <label>end time</label>
      <input type = "Number" name = 'end' onChange = {(e) => { updateTimer(e)} }/>

      <br/>
      <button onClick = {() => {setBeginTimer(!beginTimer)}}>Begin</button>
      
      { beginTimer ? <Timer {...timings}/> : null }
    </div>
  );
}

export default App;
