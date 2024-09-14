import { useState } from "react";
import { IWorkExperience, workExperience } from "../model/workEx";
import '../styles/main.scss';


export const ResumeComponent = () => {
    const [workList, setWorkList] = useState<IWorkExperience[]>(workExperience);

    const skills = ["Typescript", "Wordpress", "PHP", "Web design", "API integration", "Sass", "Team work", "Social media strategy"];

    let workListHtml = workList.map(experience => {
        return (
            <article className="resume-container__work__item" key={experience.id}>
                <h5>
                    {experience.period}
                </h5>
                <h3>
                    {experience.occupation}
                </h3>
                <h4>
                    {experience.name}
                </h4>
                <h5>
                    {experience.level}
                </h5>
                {/* 
                <h4>
                    {experience.description}
                </h4> */}
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
                    <h4>2022-2024</h4>
                    <h3>Webbutveckling e-handel</h3>
                    <h4>Medieinstitutet</h4>

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
                    <h4>
                        Illustratör
                    </h4>
                    <h5>Frilans</h5>
                    <h5>2015-2020</h5>
                </article>
                <article>
                    <h4>
                        LSS coach
                    </h4>
                    <h5>Attendo UNIKA</h5>
                    <h5>2017-2021</h5>
                </article>
                <h3>
                    Schools
                </h3>
                <article>

                    <h4>Gerlesborgsskolan Stockholm</h4>
                    <h5>2014-2015</h5>
                </article>
                <article>
                    <h4>Serietecknarutbildning, Skarpnäcks folkhögskola</h4>
                    <h5>2017-2021</h5>
                </article>
            </section>
        </section>
    )
}