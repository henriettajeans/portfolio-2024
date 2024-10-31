import '../styles/header.scss';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../model/themeContext';



const Header: FC = () => {
    const { theme, setTheme } = useTheme();
    const location = useLocation();

    return (
        <header>
            <button className="theme-button nav-button " onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                SWITCH
            </button>
            <nav>

                {location.pathname === '/' ? (
                    <Link to="/projects" className="nav-button">
                        Projects
                    </Link>
                ) : (
                    <Link to="/" className="nav-button">
                        Hem
                    </Link>
                )}
                <Link to="/#aboutme" className="nav-button"> Om Henrietta
                </Link>
            </nav>
        </header>

    );
};
export default Header;