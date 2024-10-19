
import { useTheme } from './model/themeContext';
import { Footer } from './components/footer';
import { Outlet } from 'react-router-dom';
import Header from './components/header';

import './App.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={theme}  >
      <Header />
      <main className='background'>
        <Outlet />
      </main>
      <Footer />
    </div >
  );
}

export default App;
