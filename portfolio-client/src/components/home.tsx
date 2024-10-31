import { QuestionComponent } from './questionComponent';
import { HeroSection } from './hero';
import { ResumeComponent } from './resume';
import { Link } from 'react-router-dom';
import { About } from './about';
export const Home = () => {
    return (
        <>
            <p>
                <Link to="/projects" className="nav-container__flex__list__item__link" >Projekt</Link>
            </p>
            <HeroSection />
            <About />
            <ResumeComponent />
            <QuestionComponent />

        </>

    );
}