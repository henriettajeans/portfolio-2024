import { Link } from "react-router-dom"
import { Fragment, useState, useEffect } from "react";
import '../styles/footer.scss'

export const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="theme-background">
            <section className=""><p>{`© ${year} Henrietta Jeansson`}</p>
            </section>
        </footer>
    )
}