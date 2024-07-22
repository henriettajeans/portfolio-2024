import { FC } from "react";

// Define the props type for AnimatedLetters component

interface AnimatedLettersProps {
    letterClass: string;
    strArray: string[];
    idx: number;
}
export const AnimatedLetters: FC<AnimatedLettersProps> = ({ letterClass, strArray, idx }) => {
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass}  _${i + idx}`}>{char}</span>
                ))
            }
        </span>
    );
};