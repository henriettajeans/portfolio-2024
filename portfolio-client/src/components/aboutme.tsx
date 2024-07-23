import { useEffect, useState } from "react";
import { IQuestionAndAnswers, questionAndAnswers } from "../model/questionsList";

export const About = () => {

    const [list, setList] = useState<IQuestionAndAnswers[]>(questionAndAnswers)
    const [toggleAnswer, setToggleAnswer] = useState<{ [key: string]: boolean }>({})

    const handleToggle = (id: string) => {
        setToggleAnswer(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    let questionsListHtml = list.map(question => {
        const selectId = list.map(({ id }) => id)
        console.log(selectId);

        return (
            <>
                <div key={question.id}>
                    <h5 onClick={() => handleToggle(question.id)}> {question.question}

                    </h5>
                </div>

                <section>
                    {toggleAnswer[question.id] &&
                        <p >
                            {question.answer}
                        </p>
                    }
                </section>
            </>
        )
    })
    return (
        <div className="about-container" >
            <h2 className="about-container__title">Lite om mig</h2>
            <section>
                {questionsListHtml}
            </section>
        </div>
    )
}
