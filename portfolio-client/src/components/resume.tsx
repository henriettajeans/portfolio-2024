import { useState } from "react";
import { IWorkExperience, workExperience } from "../model/workEx";
import '../styles/main.scss';


export const ResumeComponent = () => {
    const [workList, setWorkList] = useState<IWorkExperience[]>(workExperience);

    const skills = ["Typescript", "Wordpress", "PHP", "Web design", "API integration", "Sass", "Team work", "Social media strategy"];

    let workListHtml = workList.map(experience => {
        return (
            <article className="resume-container__work__item" key={experience.id}>
                <h3>
                    {experience.occupation}
                </h3>
                <h4>
                    {experience.name}
                </h4>
                <h6>
                    {experience.level}
                </h6>
                <h4>
                    {experience.period}
                </h4>
                <h4>
                    {experience.description}
                </h4>
            </article>
        )
    })


    const skillsHtml = skills.map((skill, index) => (
        <span className="resume-container__other__skills__item" key={index}>
            {skill}
        </span>
    ));
    return (
        <section className="resume-container">

            <section className="resume-container__work">
                <h2>Education</h2>
                <article className="resume-container__education">

                    <h3>Webbutveckling e-handel</h3>
                    <h4>Medieinstitutet</h4>
                    <h4>2022-2024</h4>
                </article>
                <h2>Experience</h2>
                {workListHtml}
            </section>
            <section className="resume-container__other">
                <h2>Skills</h2>
                <article className="resume-container__other__skills">

                    {/* Map to Display skills with hover effect */}
                    {skillsHtml}
                </article>
                <h2>Hobbys</h2>
                <article className="resume-container__other__hobby">
                    <h4>Rita</h4>
                    <h4>Måla</h4>
                    <h4>Koda</h4>

                    {/* Hobbies: Painting, beer, illustrating - each with a small drawing */}
                </article>
                <h2>Other experiences</h2>
                <article>
                    <h3>
                        Illustratör
                    </h3>
                    <h4>Frilans</h4>
                    <h4>2015-2020</h4>
                </article>
                <article>
                    <h3>
                        LSS coach
                    </h3>
                    <h4>Attendo UNIKA</h4>
                    <h4>2017-2021</h4>
                </article>
            </section>
        </section>
    )
}