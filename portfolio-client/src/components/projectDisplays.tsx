import { useEffect, useState } from "react";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject } from "../model/IProject";
import "../styles/projectDisplay.scss";
import { Search } from "./search";
import { Link } from "react-router-dom";


export const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
    const [filters] = useState<IFilterObjects>({
        searchTerm: '',
        topics: [],
        groupProject: [],
        hobbyProject: [],
        sort: "asc",
    })


    useEffect(() => {
        const getData = async () => {
            try {
                let projects: IProject[] = await getProjects();
                setProjects(projects);
            } catch (error) {
                console.error("Error in projectDisplays with getData:", error);
            }
        };
        getData();
    }, []);



    return (<>
        <h1>Projects</h1>
        <Search projects={projects} filters={filters} setFilteredProjects={setFilteredProjects} />



    </>);
}