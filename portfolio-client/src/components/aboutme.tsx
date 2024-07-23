import { useEffect, useState } from "react";
import { IQuestionAndAnswers, questionAndAnswers } from "../model/questionsList";

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
            <div key={question.id}>
                <div>
                    <h5 onClick={() => handleToggle(question.id)}> {question.question} </h5>
                </div>
            </div>
        )
    });

    const selectedQuestion = list.find(question => question.id === openQuestionId);

    return (
        <div className="about-container" >
            <h2 className="about-container__title">Lite om mig</h2>
            <section>
                {questionsListHtml}
            </section>
            <section>
                {selectedQuestion && (
                    <p>{selectedQuestion.answer}</p>
                )}
            </section>
        </div>
    )
}
