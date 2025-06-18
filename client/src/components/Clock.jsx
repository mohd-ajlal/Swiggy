import React, { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-green-50 via-white to-blue-50">
      <div className="bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Current Time</h1>
        <p className="text-xl">{time.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default Clock