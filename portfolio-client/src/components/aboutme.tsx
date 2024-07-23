import { useState } from "react";
import { IQuestionAndAnswers, questionAndAnswers } from "../model/questionsList";

export const About = () => {

    const [list, setList] = useState<IQuestionAndAnswers[]>(questionAndAnswers)


    // const myJSON = JSON.stringify(qnaList)
    // console.log(qnaList)
    // console.log(myJSON)

    return (
        <div className="about-container" >
            <h1 className="about-container__title">Lite om mig</h1>

            <div className="about-container__wrapper__line"></div>

            <section>
                {
                    list.map(item => {
                        return (
                            <div className={'App-item'}>
                                <div><h5> {item.question}</h5> </div>

                                <p className={'Price-item'}>
                                    ! {item.answer}
                                </p>
                            </div>
                        )

                    })

                }
            </section>

        </div>
    )
}
