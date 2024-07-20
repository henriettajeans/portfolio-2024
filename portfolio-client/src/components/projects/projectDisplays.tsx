import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getProjects } from "../../controller/getProject";
import { IProject } from "../../model/IProject";

export const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const navigate = useNavigate();


    useEffect(() => {
        const getData = async () => {
            let projects = await getProjects();

            setProjects(projects);
        }

        if (projects.length === 0) {
            getData();
        }
    });


    const showAbout = () => {
        navigate(`/about`);
    };

    return (<>
        <>
        </>
    </>);
}