import { useState } from 'react';
import { ThemeProvider } from './model/themeContext';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import './App.scss';

function App() {

  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider>
      <div className={theme}>
        <header className="header">
          <Header />

        </header>
        <main className='background'>
          <Outlet />
          <div className='theme-button'>

            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Byt här</button>

          </div>
        </main>

        <Footer />

      </div >
    </ThemeProvider >
  );
}

export default App;
