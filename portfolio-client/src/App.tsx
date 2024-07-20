import React, { useState } from 'react';
import { ThemeContext } from './model/themeContext';
import './App.scss';

function App() {


  // Check the browsers default setting
  const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const getDefaultTheme = (): string => {
    const localStorageTheme = localStorage.getItem('default-theme');
    const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
    return localStorageTheme || browserDefault;
  };
  const [theme, setTheme] = useState(getDefaultTheme());

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`theme-${theme}`}>

        <div className="App">
          <header className="App-header">
            <p>
              Iäm a little tjejcailler bean.
            </p>

          </header>
        </div >
      </div>
    </ThemeContext.Provider>

  );
}

export default App;
