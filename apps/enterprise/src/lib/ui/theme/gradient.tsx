import React from 'react';

export const GradientBackground = () => (
  <div
    className="gradient-background"
    style={{
      background: 'linear-gradient(300deg, #efff00, #f8f9f9, #040404)',
      backgroundSize: '180% 180%',
      animation: 'gradient-animation 30s ease infinite',
    }}
  />
);

export const GradientAnimation = () => (
  <style>
    {`
      @keyframes gradient-animation {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    `}
  </style>
);
