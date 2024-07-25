import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

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
        <div ref={menuRef}>
            <button className="hamMenu" onClick={() => setToggleForm(!toggleForm)}>Meny</button>
            {toggleForm && (
                <section>
                    <ul className="nav-container__flex__list">
                        <li className="nav-container__flex__list__item">
                            <Link to="/" className="nav-container__flex__list__item__link" onClick={handleLinkClick}>Hem</Link>
                        </li>
                        <li className="nav-container__flex__list__item">
                            <Link to="/projects" className="nav-container__flex__list__item__link" onClick={handleLinkClick}>Projekt</Link>
                        </li>
                        <li className="nav-container__flex__list__item">
                            <Link to="/about" className="nav-container__flex__list__item__link" onClick={handleLinkClick}>Om</Link>
                        </li>
                    </ul>
                </section>
            )}
        </div>
    );
}