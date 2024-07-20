import { useEffect, useState } from "react";
import { IProject } from "./IProject";
import { getProjects } from "../controller/getProject";
import { error } from "console";
import { Link } from "react-router-dom";

export const ProjectsAreLoading = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        const showProjects = async () => {
            let projectApi = await getProjects();

            setProjects(projectApi);
        }
        const errorHtml = () => {
            console.log(error)
            return (
                <div className="error">Cannot show any projects...</div>
            )
        }
        if (projects.length > 0 ? showProjects : errorHtml) return;
    })
    let html = projects.map((project) => {
        return (
            // Select what you want showing up at the standard display
            <div className="myProjects" key={project.id}>
                <h1>{project.name}</h1>
                <p><Link to={project.html_url}>{project.html_url}</Link></p>
                <span>Skapades {project.created_at}</span>
                <p>{project.language}</p>
            </div>
        )
    });
    return (
        <>
            {html}
        </>)
}