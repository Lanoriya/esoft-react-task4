import { useEffect, useState } from "react"

export function CountdownTimer() {

  const [nowTimer, setNowTimer] = useState(10);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setNowTimer(nowTimer => nowTimer - 1);
        if (nowTimer - 1 === 0) {
          setIsActive(false);
        }
      }, 1000);
    }
    return () => clearInterval(interval)
  }, [isActive, nowTimer])
  return (
    <div className="timer">
      <p>timer now: {nowTimer}</p>
    </div>
  )
}
