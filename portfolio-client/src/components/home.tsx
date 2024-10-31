import { QuestionComponent } from './questionComponent';
import { HeroSection } from './hero';
import { ResumeComponent } from './resume';
import { Link } from 'react-router-dom';
import { About } from './about';
export const Home = () => {
    return (
        <>
            <HeroSection />
            <About />
            <ResumeComponent />
            <QuestionComponent />

        </>

    );
}