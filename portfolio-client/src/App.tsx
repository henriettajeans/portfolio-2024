import { useState } from 'react';
import { ThemeProvider } from './model/themeContext';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import './App.scss';

function App() {

  const [theme, setTheme] = useState('light');

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
