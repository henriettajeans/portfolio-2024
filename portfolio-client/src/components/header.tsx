import '../styles/header.scss';
import { FC, useContext } from 'react';
import { ThemeContext } from '../model/themeContext';
import { Nav } from './nav';
import logo from "../assets/moon.png";


const Header: FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    };
    return (
        <header className="header">
            <Nav />
            <div className="header-content">
                <a href="/" className="logo-section">
                    <img src={logo} className='logo' alt="logo" />
                    <span>Light/Dark mode app</span>
                </a>
                <div className="toggle-btn-section">
                    <div className={`toggle-checkbox m-vertical-auto`}>
                        <input
                            className="toggle-btn__input"
                            type="checkbox"
                            name="checkbox"
                            onChange={handleThemeChange}
                            checked={theme === 'light'}
                        />
                        <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;