import '../styles/header.scss';
import { FC, useContext } from 'react';
import { ThemeContext } from '../model/themeContext';
import { Nav } from './nav';
import logo from "../assets/moon.png";


const Header: FC = () => {

    return (
        <header className="header">
            <Nav />
            <div className="header-content">
                <a href="/" className="logo-section">
                    <img src={logo} className='logo' alt="logo" />
                </a>
            </div>
        </header>
    );
};
export default Header;