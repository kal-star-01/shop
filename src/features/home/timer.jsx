import { useEffect, useState } from 'react';

export default function Timer({ date }) {
  const timerdate = Math.trunc(new Date(date).getTime() / 1000);
  const [now, setNow] = useState(Math.trunc(Date.now() / 1000));

  useEffect(() => {
    const id = window.setInterval(() => {
      setNow(Math.trunc(Date.now() / 1000));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = timerdate - now;
  const seconds = diff % 60;
  const minutes = Math.trunc(diff / 60) % 60;
  const hours = Math.trunc(diff / 60 / 60) % 24;
  const days = Math.trunc(diff / 60 / 60 / 24);

  return (
    <div>
    <div className="timer">
      <ul id="demo">
        <li><span className="timer-num">{days}</span> Days</li>
        <li><span className="timer-num">{hours}</span> Hours</li>
        <li><span className="timer-num">{minutes}</span> Minutes</li>
        <li><span className="timer-num">{seconds}</span> Seconds</li>
      </ul>
    </div>
    </div>
  );
}
