import { Link } from "react-router-dom"
import '../styles/footer.scss'

export const Footer = () => {


    return (
        <footer className="footer-container">
            <section className="theme-background">
                <Link to="mailto:henrietta.jeansson@medieinstitutet.se" className="text">henrietta.jeansson</Link>
                <Link to="mailto:henrietta.jeansson@medieinstitutet.se" className="text">@medieinstitutet.se</Link>
            </section>
        </footer>
    )
}