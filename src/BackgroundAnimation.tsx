// src/BackgroundAnimation.js
import React from 'react';
import { useCurrentFrame, spring, useVideoConfig } from 'remotion';

const randomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomPosition = (max) => Math.floor(Math.random() * max);

const Circle = ({ index, totalShapes }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const progress = spring({
    frame: frame - index * (120 / totalShapes), // Increasing the offset
    fps: 30,
    config: {
      damping: 200, // Higher damping for smoother movement
    },
    durationInFrames: 240, // Further increasing duration for slower animation
  });

  const x = progress * width;
  const y = progress * height;

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: x,
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: randomColor(),
        transform: `translate(${randomPosition(width)}px, ${randomPosition(height)}px)`,
      }}
    />
  );
};

export const BackgroundAnimation = () => {
  const { width, height } = useVideoConfig();
  const totalShapes = 20;

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
          <Circle key={index} index={index} totalShapes={totalShapes} />
        ))}
    </div>
  );
};
