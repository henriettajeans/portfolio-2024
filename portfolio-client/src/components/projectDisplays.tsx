import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject } from "../model/IProject";
import "../styles/projectDisplay.scss";
import { Search } from "./search";


export const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
    const navigate = useNavigate();
    const [filters, setFilter] = useState<IFilterObjects>({
        searchTerm: '',
        topics: [],
        groupProject: [],
        hobbyProject: [],
        sort: "asc",
    })
    const showAbout = () => {
        navigate(`/about`);
    };

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
        <section className="myProjects--title">

            <h1 className="myProjects--title__text">Projects</h1>
            <Search projects={projects} filters={filters} setFilteredProjects={setFilteredProjects} />
        </section>
        <div>

        </div>
        <div className="myProjects--container">

            <button onClick={showAbout} className="myProjects--container__abt-btn">Låt mig berätta lite om mig själv</button>
        </div>
    </>);
}