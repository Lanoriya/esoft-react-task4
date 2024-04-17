import { useEffect, useState } from "react"

export function WindowSize() {
  const [clientWidth, setClientWidth] = useState(innerWidth);
  const [clientHeight, setClientHeight] = useState(innerHeight);

  useEffect(() => {
    function calculateWindow() {
      setClientWidth(innerWidth);
      setClientHeight(innerHeight);
    }
    addEventListener('resize', calculateWindow)

    return () => {
      removeEventListener('resize', calculateWindow);
    };

  }, [])

  return (
    <div className="window">
      <p>Width: {clientWidth}</p>
      <p>Height: {clientHeight}</p>
    </div>
  )
}
