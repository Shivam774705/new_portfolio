import React, { useEffect } from 'react';
import gsap from 'gsap';

const Marquee = ({ id, speed, items }) => {
  useEffect(() => {
    const track = document.getElementById(id);
    if (!track) return;

    const totalW = track.scrollWidth / 2;
    let x = 0;
    
    const animation = () => {
      x -= speed;
      if (Math.abs(x) >= totalW) x = 0;
      track.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(animation);
    };

    const animFrame = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(animFrame);
  }, [id, speed]);

  return (
    <div className="marquee-wrap">
      <div className="marquee-track" id={id}>
        {items.concat(items).map((item, index) => (
          <div key={index} className={`marquee-item ${item.highlight ? 'highlight' : ''}`}>
            {item.text} <span className="dot">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
