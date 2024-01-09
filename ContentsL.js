import React, { useEffect, useRef } from 'react';
import Fireworks from './Showering';
const NewYearGreeting = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawNewYearGreeting = () => {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'white';
      ctx.font = '48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Happy New Year', canvas.width / 2, canvas.height / 2 - 24);
      ctx.fillText('2024', canvas.width / 2, canvas.height / 2 + 24);
    };

    resizeCanvas();
    drawNewYearGreeting();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} id="canvas"></canvas>
      <Fireworks/>
    </div>
  );
};

export default NewYearGreeting;
