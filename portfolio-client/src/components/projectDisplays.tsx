import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject } from "../model/IProject";
import "../styles/projectDisplay.scss";
import { Search } from "./search";


export const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
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
    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    useEffect(() => {
        const getData = async () => {
            try {
                let projects = await getProjects();
                setProjects(projects);
            } catch (error) {
                console.error("Error in projectDisplays with getData:", error);
            }
        };
        getData();
    }, []);
    const sortAndFilterProjects = (filterObj: IFilterObjects) => {
        return projects.filter(item => {
            return (item.name && item.name.toLowerCase().includes(filterObj.searchTerm.toLowerCase())) &&
                (filterObj.topics.length > 0 ? filterObj.topics.includes(item.topics) : true);
        });
    };
    useEffect(() => {
        const data = sortAndFilterProjects(filters);
        setProjects(data);  // Use a separate state to avoid infinite loops
    }, [filters]);

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
        </section>
        <div className="myProjects--container">

            {html}
            <button onClick={showAbout} className="myProjects--container__abt-btn">Låt mig berätta lite om mig själv</button>
        </div>
    </>);
}