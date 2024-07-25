import { useEffect, useState } from "react";
import { IQuestionAndAnswers, questionAndAnswers } from "../model/questionsList";
import illustration from "../assets/Logo.png";
import '../styles/main.scss';

export const About = () => {

    const [list, setList] = useState<IQuestionAndAnswers[]>(questionAndAnswers);
    const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);

    const handleToggle = (id: string) => {
        if (openQuestionId === id) {
            setOpenQuestionId(null); // Close the currently open question if it's clicked again
        } else {
            setOpenQuestionId(id); // Open the clicked question
        }
    }

    let questionsListHtml = list.map(question => {
        return (
            <div className="singleQuestion" key={question.id}>
                <h5 onClick={() => handleToggle(question.id)}> {question.question} </h5>
            </div>
        )
    });

    const selectedQuestion = list.find(question => question.id === openQuestionId);

    return (
        <div className="about-container" >
            <h2 className="about-container__title">Lite om mig</h2>
            <section className="questions">
                {questionsListHtml}
            </section>
            <section className="bubble">
                {selectedQuestion && (
                    <p>{selectedQuestion.answer}</p>
                )}
            </section>
            <img src={illustration} className='illustration' alt="logo" />

        </div>
    )
}
