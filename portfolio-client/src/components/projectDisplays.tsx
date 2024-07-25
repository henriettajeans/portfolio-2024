import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getProjects } from "../controller/getProject";
import { IProject } from "../model/IProject";
import "../styles/projectDisplay.scss";


export const Projects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const navigate = useNavigate();


    useEffect(() => {
        const getData = async () => {
            try {
                let projects = await getProjects();
                setProjects(projects);
            } catch (error) {
                console.error("Error i projectDisplays med getData:", error);
            }
        };

        if (projects.length === 0) {
            getData();
        }
    }, [projects.length]);

    const formatDate = (dateString: string): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };


    const showAbout = () => {
        navigate(`/about`);
    };

    let html = projects.map((project) => {
        return (

            <div className="project" key={project.id}>
                <h1 className="myProjects--container__components__title">{project.name}</h1>
                <p><Link to={project.html_url} className="myProjects--container__components__link">{project.html_url}</Link></p>
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