import React, { useState } from 'react';
import { ThemeContext, ThemeProvider } from './model/themeContext';
import './App.scss';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import { Home } from './components/home';

function App() {

  const [theme, setTheme] = useState('light');

  // Check the browsers default setting
  // const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const getDefaultTheme = (): string => {
  //   const localStorageTheme = localStorage.getItem('default-theme');
  //   const browserDefault = isBrowserDefaultDark() ? 'dark' : 'light';
  //   return localStorageTheme || browserDefault;
  // };


  return (
    <>
      <ThemeProvider>
        <div className={theme}>

          <section className='background flex'>
            <Header />
            <h1 className='text'>Hej från tjejbacillen</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Byt här</button>
            <Outlet />

          </section>




          <Footer />

        </div >
      </ThemeProvider>
    </>
  );
}

export default App;
