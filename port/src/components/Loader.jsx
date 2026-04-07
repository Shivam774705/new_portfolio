import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let currentCount = 0;
    const counter = setInterval(() => {
      currentCount += Math.floor(Math.random() * 8) + 3;
      if (currentCount >= 100) {
        currentCount = 100;
        clearInterval(counter);
        setTimeout(() => {
          gsap.to('#loader', {
            yPercent: -100,
            duration: 0.9,
            ease: 'power3.inOut',
            onComplete: () => {
              document.getElementById('loader').style.display = 'none';
              onComplete();
            },
          });
        }, 200);
      }
      setCount(currentCount);
    }, 40);

    return () => clearInterval(counter);
  }, [onComplete]);

  return (
    <div id="loader">
      <div className="loader-num">{count}</div>
      <div className="loader-bar" style={{ width: `${count}%` }}></div>
    </div>
  );
};

export default Loader;
