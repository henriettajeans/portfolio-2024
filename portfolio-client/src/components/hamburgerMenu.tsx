import { useState } from "react"
import { Link } from "react-router-dom"

export const HamburgerToggle = () => {
    let [toggleForm, setToggleForm] = useState(false)
    return (
        <div>
            <button onClick={() => { setToggleForm(!toggleForm) }}>Meny

            </button>
            {toggleForm &&
                <section>
                    <ul className="nav-container__flex__list">
                        <li className="nav-container__flex__list__item">
                            <Link to="/" className="nav-container__flex__list__item__link">Hem</Link></li>
                        <li className="nav-container__flex__list__item">
                            <Link to="/projects" className="nav-container__flex__list__item__link">Projekt</Link></li>
                        <li className="nav-container__flex__list__item">
                            <Link to="/about" className="nav-container__flex__list__item__link">Om</Link></li>

                    </ul>
                </section>
            }
        </div>
    )
}