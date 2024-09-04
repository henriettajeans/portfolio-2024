import { useState, FC, useEffect } from "react";
import { AnimatedLetters } from "./animatedLetters";



export const Welcome: FC = () => {
    const [letterClass, setLetterClass] = useState<string>('text-animate');
    const letterArray1: string[] = ['e', 'n', 'r', 'i', 'e', 't', 't', 'a'];
    const letterArray2: string[] = ['e', 'a', 'n', 's', 's', 'o', 'n'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 1000);

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home-container">
            <span className={`${letterClass}`}>Ӈ</span>
            <AnimatedLetters letterClass={letterClass} strArray={letterArray1} idx={5} />
            <br></br>
            <AnimatedLetters letterClass={letterClass} strArray={letterArray2} idx={13} />
        </div>
    );
};