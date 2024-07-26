import { useEffect, useState } from "react";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject, IProjectProp } from "../model/IProject";
import { Link } from "react-router-dom";

export const Search: React.FC<IProjectProp> = ({ filteredProjects }) => {
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    return (
        <><div>
            {filteredProjects.map(project => (
                <div className="project" key={project.id}>
                    <h1 className="myProjects--container__components__title">{project.name}</h1>
                    <span className="myProjects--container__components__created">Skapades {formatDate(project.created_at)}</span>
                    <p className="myProjects--container__components__lang">{project.language}</p>
                    <Link to={`/project/${project.id}`} className="myProjects--container__components__btn">Beskrivning projektet</Link>
                </div>
            ))}
        </div>
        </>
    )
}