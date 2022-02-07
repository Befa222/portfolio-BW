import React, { useState } from 'react';

export default function SwithTheme() {
  const [switchButton, setSwitchButton] = useState();

  let root = document.documentElement;
  const dark = () => {
    root.style.setProperty('--BgColor', '#131313');
    root.style.setProperty('--Accent', '#d4d4d4');
  };
  const light = () => {
    root.style.setProperty('--BgColor', '#d4d4d4');
    root.style.setProperty('--Accent', '#131313');
  };
  return (
    <div id="switch-container">
      {switchButton ? light() : dark()}
      <div
        onClick={() => setSwitchButton(!switchButton)}
        style={{
          transform: switchButton ? 'translateX(8vw)' : 'translateX(0vw)',
        }}
        className="switch"
      ></div>
    </div>
  );
}
