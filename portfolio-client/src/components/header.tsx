import '../styles/header.scss';
import { FC } from 'react';
import { useTheme } from '../model/themeContext';



const Header: FC = () => {

    const { theme, setTheme } = useTheme();
    return (
        <header className="header">
            <nav>
                <div className='theme-button'>
                    <button className="themeBtn" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                        VÄLJ PINK O GREEN
                    </button>
                </div>
            </nav>
        </header>

    );
};
export default Header;