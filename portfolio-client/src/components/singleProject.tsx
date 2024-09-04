
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IRepo } from "../model/IProject";
import { GetRepoById } from "../controller/getProject";
import { RiArrowGoBackLine } from "react-icons/ri";



export const Project = (() => {

    const [project, setProject] = useState<IRepo>();
    const { id } = useParams();
    const navigate = useNavigate();

    const getBack = () => {
        navigate(`/projects`);
    };


    useEffect(() => {
        getDataById();
    }, []);
    const getDataById = async () => {
        if (id) {
            let response = await GetRepoById(id!);
            setProject(response);
        }
    }
    return (<>
        <article className="project-component">
            {/* TODO: Move button fither down to make it clickable (margin hinders this) */}
            <button onClick={getBack} className="singleProjectBtn"> <RiArrowGoBackLine /> </button>
            {/* TODO: Add next project button */}
            <h2 className="project-component__title">{project?.name}</h2>
            <div className="project-component__flex">

                <h4 className="project-component__flex__desctitle">Beskrivning av projektet</h4>
                <p className="project-component__flex__desc">{project?.description}</p>
                <a href={project?.html_url} className="project-component__flex__url__link">
                    ~ Se repot på github ~
                </a>
                <h4>I projektet har följade tekniker använts: </h4>
                <span className="project-component__flex__desc"> {project?.topics?.join(", ")}</span>

            </div>
        </article>
    </>
    );
})