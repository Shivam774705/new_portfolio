import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const curRef = useRef(null);
  const trailRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, tx: 0, ty: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = `${pos.current.mx}px`;
        curRef.current.style.top = `${pos.current.my}px`;
      }
    };

    const animTrail = () => {
      pos.current.tx += (pos.current.mx - pos.current.tx) * 0.1;
      pos.current.ty += (pos.current.my - pos.current.ty) * 0.1;
      if (trailRef.current) {
        trailRef.current.style.left = `${pos.current.tx}px`;
        trailRef.current.style.top = `${pos.current.ty}px`;
      }
      requestAnimationFrame(animTrail);
    };

    const handleMouseEnter = () => document.body.classList.add('cursor-big');
    const handleMouseLeave = () => document.body.classList.remove('cursor-big');

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animTrail);

    const interactiveElements = document.querySelectorAll('a, button, .project-item, .skill-cat-header');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cur" ref={curRef}></div>
      <div id="cur-trail" ref={trailRef}></div>
    </>
  );
};

export default Cursor;
