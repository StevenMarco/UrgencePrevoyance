// Counter.js
import React, { useEffect, useState } from 'react';

function Counter({ endValue, duration = 1000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;

    function animateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.round((endValue * progress) / duration), endValue);

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCounter);
      }
    }

    requestAnimationFrame(animateCounter);
  }, [endValue, duration]);

  return <p>{count.toLocaleString()}</p>;
}

export default Counter;
