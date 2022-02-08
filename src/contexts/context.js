import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [switchButton, setSwitchButton] = useState();
  const [switchParticules, setSwitchParticules] = useState();
  let root = document.documentElement;
  const dark = () => {
    root.style.setProperty('--BgColor', '#131313');
    root.style.setProperty('--Accent', '#d4d4d4');
  };
  const light = () => {
    root.style.setProperty('--BgColor', '#d4d4d4');
    root.style.setProperty('--Accent', '#131313');
  };

  let darkParticles = '#131313';
  let lightParticles = '#d4d4d4';
  function particulesColor() {
    switchParticules === '#131313'
      ? setSwitchParticules(lightParticles)
      : setSwitchParticules(darkParticles);
  }

  const value = {
    particulesColor,
    switchButton,
    setSwitchButton,
    light,
    dark,
    switchParticules,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
