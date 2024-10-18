import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import '../styles/header.scss';

export const HamburgerToggle = () => {
    let [toggleForm, setToggleForm] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setToggleForm(false);
        }
    };

    useEffect(() => {
        if (toggleForm) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleForm]);

    const handleLinkClick = () => {
        setToggleForm(false);
    };
    return (
        <div className="hamMenu" ref={menuRef}>
            {/* <button className="hamMenu-btn" onClick={() => setToggleForm(!toggleForm)}> <IoMenu />
            </button>

            {toggleForm && ( */}
            <section className="menu-items">

                <p className="hamMenu__text">
                    <Link to="/" className="nav-container__flex__list__item__link" onClick={handleLinkClick}>Hem</Link>
                </p>
                <p className="hamMenu__text">
                    <Link to="/projects" className="nav-container__flex__list__item__link" onClick={handleLinkClick}>Projekt</Link>
                </p>

            </section>
            {/* )} */}
        </div>
    );
}