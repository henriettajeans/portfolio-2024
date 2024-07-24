import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import { HamburgerToggle } from './hamburgerMenu';
import { ThemeContext } from '../model/themeContext';
import { useContext } from 'react';

export const Nav = () => {
    const { theme } = useContext(ThemeContext)

    return (<div className="nav">
        <nav>

            < HamburgerToggle />
        </nav>

    </div>
    )
}