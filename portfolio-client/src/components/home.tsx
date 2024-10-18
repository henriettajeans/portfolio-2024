import { QuestionComponent } from './questionComponent';
import { HeroSection } from './hero';
import { ResumeComponent } from './resume';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <>
            <p>
                <Link to="/projects" className="nav-container__flex__list__item__link" >Projekt</Link>
            </p>
            <HeroSection />
            <ResumeComponent />
            <QuestionComponent />

        </>

    );
}