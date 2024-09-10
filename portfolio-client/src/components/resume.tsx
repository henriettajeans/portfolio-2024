import { useState } from "react";
import { IWorkExperience, workExperience } from "../model/workEx";


export const ResumeComponent = () => {
    const [workList, setWorkList] = useState<IWorkExperience[]>(workExperience);

    const skills = ["PHP", "Typescript", "Sass", "Web design", "Wordpress", "API integration"];

    let workListHtml = workList.map(experience => {
        return (
            <article key={experience.id}>
                <h4>
                    {experience.occupation}
                </h4>
                <h5>
                    {experience.name}
                </h5>
                <h6>
                    {experience.level}
                </h6>
                <span>
                    {experience.period}
                </span>
                <p>
                    {experience.description}
                </p>

            </article>
        )
    })

    const skillsHtml = skills.map((skill, index) => (
        <span key={index} style={{ marginRight: '10px' }}>
            {skill}
        </span>
    ));
    return (
        <>
            <section>
                {/* Map relevant working experience, divided as articles */}

                {workListHtml}

            </section>
            <article>

                {/* Map to Display skills with hover effect */}
                {skillsHtml}
            </article>
            <article>
                {/* Hobbies: Painting, beer, illustrating - each with a small drawing */}
            </article>

        </>
    )
}