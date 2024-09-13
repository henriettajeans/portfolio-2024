import { useState } from "react";
import { IWorkExperience, workExperience } from "../model/workEx";
import '../styles/main.scss';


export const ResumeComponent = () => {
    const [workList, setWorkList] = useState<IWorkExperience[]>(workExperience);

    const skills = ["Typescript", "Wordpress", "PHP", "Web design", "API", "Sass"];

    let workListHtml = workList.map(experience => {
        return (
            <article className="resume-container__work__item" key={experience.id}>
                <h4>
                    {experience.occupation}
                </h4>
                <h5>
                    {experience.name}
                </h5>
                <h6>
                    {experience.level}
                </h6>
                <p>
                    {experience.period}
                </p>
                <p>
                    {experience.description}
                </p>
            </article>
        )
    })


    const skillsHtml = skills.map((skill, index) => (
        <span className="resume-container__other__skills__item" key={index} style={{ marginRight: '10px' }}>
            {skill}
        </span>
    ));
    return (
        <section className="resume-container">

            <section className="resume-container__work">
                <h3>Education</h3>
                <article className="resume-container__education">

                    <h4>Webbutveckling e-handel</h4>
                    <h5>Medieinstitutet</h5>
                    <span>2022-2024</span>
                </article>
                <h3>Experience</h3>
                {workListHtml}
            </section>
            <section className="resume-container__other">
                <h3>Skills</h3>
                <article className="resume-container__other__skills">

                    {/* Map to Display skills with hover effect */}
                    {skillsHtml}
                </article>
                <h3>Hobbys</h3>
                <article className="resume-containe__other__hobby">

                    {/* Hobbies: Painting, beer, illustrating - each with a small drawing */}
                </article>
            </section>
        </section>
    )
}