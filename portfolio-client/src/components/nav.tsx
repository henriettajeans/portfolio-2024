import { Link } from 'react-router-dom';
import "../styles/navbar.scss";
import { HamburgerToggle } from './hamburgerMenu';

export const Nav = () => {

    return (<div className="nav">
        <nav>

            < HamburgerToggle />
        </nav>

    </div>
    )
}