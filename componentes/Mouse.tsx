import React from 'react';
import { useMousePosition } from './useMousePosition';

export function Mouse() {
  const { x, y } = useMousePosition();

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>
        Posição do mouse: X - {x}, Y - {y}
      </p>
    </div>
  );
}
