
import { useEffect, useState } from "react";
import { IRepo, ProjectProps } from "../model/IProject";
import { VscGithub } from "react-icons/vsc";



export const Project: React.FC<ProjectProps> = ({ project, onClose }) => {

    const [singleProject, setSingleProject] = useState<IRepo>();

    useEffect(() => {
        if (project) {
            setSingleProject(project);
        }
    }, [project]);

    const isValidUrl = (url: string) => {
        try {
            new URL(url);
            return true;
        } catch (error) {
            return false;
        }
    };


    return (<>
        <article className="project-component">
            <button onClick={onClose} className="singleProjectBtn">Close</button>
            {/* <button onClick={getBack} className="singleProjectBtn"> <RiArrowGoBackFill /> </button> */}

            <h2 className="project-component__title">{singleProject?.name}</h2>
            <div className="project-component__flex">

                <h4 className="project-component__flex__desctitle">Beskrivning av projektet</h4>
                <p className="project-component__flex__desc">{singleProject?.description}</p>
                <div>
                    {singleProject?.homepage && isValidUrl(singleProject?.homepage) ? (
                        <a href={singleProject?.homepage} target="_blank" rel="noopener noreferrer">
                            Klicka för att se live!
                        </a>
                    ) : (
                        <p>Det här projektet har ingen liveversion</p>
                    )}
                </div>

                <h4>I projektet har följade tekniker använts: </h4>
                <span className="project-component__flex__desc"> {singleProject?.topics?.join(", ")}</span>
                <a href={singleProject?.html_url} className="project-component__flex__url__link">
                    Se koden på <VscGithub />
                </a>
            </div>

        </article>


    </>
    );
}