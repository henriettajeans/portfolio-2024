import { QuestionComponent } from './questionComponent';
import { HeroSection } from './hero';
import { ResumeComponent } from './resume';
export const Home = () => {
    return (
        <>
            <HeroSection />
            <ResumeComponent />
            <QuestionComponent />

        </>

    );
}