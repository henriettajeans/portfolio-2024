import '../styles/header.scss';
import { FC, useContext } from 'react';
import { ThemeContext } from '../model/themeContext';


const Header: FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeChange = () => {
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark');
    };
    return (
        <header className="header">
            <div className="header-content">
                <a href="/" className="logo-section">
                    <img src="https://cdn4.iconfinder.com/data/icons/materia-flat-multimedia-vol-1/24/007_006_brightness_low_small_sun-1024.png" alt="logo" />
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