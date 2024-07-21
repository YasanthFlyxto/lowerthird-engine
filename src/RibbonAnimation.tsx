// src/RibbonAnimation.js
import React, { useEffect, useRef } from 'react';
import { useCurrentFrame, useVideoConfig } from 'remotion';

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Ribbon = ({ index, totalShapes, width, height }) => {
  const frame = useCurrentFrame();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawRibbon = (progress) => {
      ctx.clearRect(0, 0, width, height);
      const ribbonWidth = 20;
      const length = 300;
      const x = (width / totalShapes) * index + progress * 200;
      const y = (height / totalShapes) * index + progress * 100;

      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 0; i < length; i++) {
        const angle = i * 0.1;
        const dx = Math.cos(angle) * ribbonWidth;
        const dy = Math.sin(angle) * ribbonWidth;
        ctx.lineTo(x + dx, y + dy);
      }
      ctx.strokeStyle = randomColor();
      ctx.lineWidth = ribbonWidth;
      ctx.stroke();
    };

    const progress = (frame % 300) / 300; // Loop every 300 frames
    drawRibbon(progress);
  }, [frame, index, totalShapes, width, height]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};

export const RibbonAnimation = () => {
  const { width, height } = useVideoConfig();
  const totalShapes = 10;

  return (
    <div
      style={{
        position: 'absolute',
        width,
        height,
        overflow: 'hidden',
        backgroundColor: '#000',
      }}
    >
      {Array(totalShapes)
        .fill(0)
        .map((_, index) => (
          <Ribbon
            key={index}
            index={index}
            totalShapes={totalShapes}
            width={width}
            height={height}
          />
        ))}
    </div>
  );
};
