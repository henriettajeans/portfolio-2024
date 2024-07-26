import '../styles/header.scss';
import { FC, useContext } from 'react';
import logo from "../assets/Logo_tjejbaciller.png";
import { HamburgerToggle } from './hamburgerMenu';


const Header: FC = () => {

    return (
        <>

            <a href="/" className="logo-section">
                <img src={logo} className='logo' alt="logo" />
            </a>
            < HamburgerToggle />
        </>
    );
};
export default Header;