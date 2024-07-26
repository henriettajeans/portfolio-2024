import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
                let projects: IProject[] = await getProjects();  // Fetch your projects here
                setProjects(projects);
            } catch (error) {
                console.error("Error in projectDisplays with getData:", error);
            }
        };
        getData();
    }, []);
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    let html = projects.map((project) => {
        return (

            <div className="project" key={project.id}>
                <h1 className="myProjects--container__components__title">{project.name}</h1>
                <span className="myProjects--container__components__created">Skapades {formatDate(project.created_at)}</span>
                <p className="myProjects--container__components__lang">{project.language}</p>
                <Link to={`/project/${project.id}`} className="myProjects--container__components__btn">Beskrivning projektet</Link>
            </div>
        )
    });

    return (<>
        <section className="myProjects--title">

            <h1 className="myProjects--title__text">Projects</h1>
            <Search projects={projects} filters={filters} setFilteredProjects={setFilteredProjects} />
        </section>
        <div>

        </div>
        <div className="myProjects--container">

            {/* {html} */}
            <button onClick={showAbout} className="myProjects--container__abt-btn">Låt mig berätta lite om mig själv</button>
        </div>
    </>);
}