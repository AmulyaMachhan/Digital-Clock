import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    } , 1000);

    return () => {
      clearInterval(intervalId)
    }
  });

  function formatTime(time){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let meridiem = (hours > 12) ? "PM" : "AM";

    hours = (hours > 10) ? hours : "0" + hours;
    minutes = (minutes > 10) ? minutes : "0" + minutes;
    seconds = (seconds > 10) ? seconds : "0" + seconds;

    return `${hours} : ${minutes} : ${seconds} ${meridiem}`;
   }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{formatTime(time)}</span>
        </div>
      </div>
    </>
  )
}

export default App
