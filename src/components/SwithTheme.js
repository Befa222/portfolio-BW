import React from 'react';
import { useTheme } from '../contexts/context';

export default function SwithTheme() {
  const { switchButton, setSwitchButton, dark, light, particulesColor } =
    useTheme();

  return (
    <div id="switch-container">
      {switchButton ? light() : dark()}
      <div
        onClick={() => {
          setSwitchButton(!switchButton);
          particulesColor();
        }}
        style={{
          transform: switchButton ? 'translateX(100%)' : 'translateX(0vw)',
        }}
        className="switch"
      ></div>
    </div>
  );
}
