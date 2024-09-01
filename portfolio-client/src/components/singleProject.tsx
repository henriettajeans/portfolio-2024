
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRepo } from "../model/IProject";
import { GetRepoById } from "../controller/getProject";



export const Project = (() => {

    const [project, setProject] = useState<IRepo>();
    const { id } = useParams();


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
            {/* TODO: Add back to last page button */}
            {/* TODO: Add next project button */}
            <h1 className="project-component__title">{project?.name}</h1>
            <div className="project-component__flex">

                <h4 className="project-component__flex__desctitle">Beskrivning av projektet</h4>
                <p className="project-component__flex__desc">{project?.description}</p>
                <p className="project-component__flex__url">
                    <a href={project?.html_url} className="project-component__flex__url__link">
                        ~ Se repot på github ~
                    </a></p>
                <p className="project-component__flex__desc"> {project?.topics?.join(", ")}</p>

            </div>
        </article>
    </>
    );
})