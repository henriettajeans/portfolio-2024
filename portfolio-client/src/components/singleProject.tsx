
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IRepo } from "../model/IProject";
import { GetRepoById } from "../controller/getProject";
import { RiArrowGoBackFill } from "react-icons/ri";
import { VscGithub } from "react-icons/vsc";



export const Project = (() => {

    const [project, setProject] = useState<IRepo>();
    const { id } = useParams();
    const navigate = useNavigate();

    const getBack = () => {
        navigate(`/projects`);
    };


    useEffect(() => {
        const getDataById = async () => {
            if (id) {
                let response = await GetRepoById(id!);
                setProject(response);
            }
        };
        getDataById();
    }, [id]);
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
            <button onClick={getBack} className="singleProjectBtn"> <RiArrowGoBackFill /> </button>

            <h2 className="project-component__title">{project?.name}</h2>
            <div className="project-component__flex">

                <h4 className="project-component__flex__desctitle">Beskrivning av projektet</h4>
                <p className="project-component__flex__desc">{project?.description}</p>
                <a href={project?.html_url} className="project-component__flex__url__link">
                    Se repot på github <VscGithub />
                </a>
                <h4>I projektet har följade tekniker använts: </h4>
                <span className="project-component__flex__desc"> {project?.topics?.join(", ")}</span>
                <span className="project-component__flex__desc"> {project?.homepage}</span>
            </div>
            <div>
                <div>
                    {project?.homepage && isValidUrl(project?.homepage) ? (
                        <a href={project?.homepage} target="_blank" rel="noopener noreferrer">
                            Click here to see a live version
                        </a>
                    ) : (
                        <p>No live version available</p>
                    )}
                </div>
            </div>
        </article>
    </>
    );
})