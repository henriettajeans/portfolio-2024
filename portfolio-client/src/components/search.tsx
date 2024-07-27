import { useEffect, useState } from "react";
import { IFilterObjects, IProject } from "../model/IProject";
import { Topics, TOPICS } from "../model/filterType";
import { Link } from "react-router-dom";


export const Search: React.FC<{ projects: IProject[], filters: IFilterObjects, setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>> }> = ({ projects, filters, setFilteredProjects }) => {
    const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
    const [selectedTopics, setSelectedTopics] = useState<Topics[]>(filters.topics);

    const filterProjects = (projects: IProject[], filters: IFilterObjects): IProject[] => {


        return projects.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTopics = selectedTopics.length === 0 || selectedTopics.some(filterTopic =>
                item.topics.includes(filterTopic)
            );

            return matchesSearchTerm && matchesTopics;
        });
    };
    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value as Topics;
        console.log("klick event target value");

        if (TOPICS.includes(selectedValue)) {
            setSelectedTopics([selectedValue]);
            console.log(selectedValue);
        } else {
            setSelectedTopics([]);
        }


    };

    useEffect(() => {
        const filtered = filterProjects(projects, { ...filters, searchTerm, topics: selectedTopics });
        setFilteredProjects(filtered);
    }, [projects, searchTerm, selectedTopics, filters, setFilteredProjects]);

    return (
        <>
            <div>
                <label htmlFor="searchTerm">Search:</label>
                <input
                    id="searchTerm"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
            <div>
                <label htmlFor="topics">Topics:</label>
                <select
                    id="topics"
                    value={selectedTopics[0] || ""}
                    onChange={handleTopicChange}

                >
                    {TOPICS.map(topic => (

                        <option key={topic} value={topic}>{topic} </option>

                    ))}
                    <option value="">Select a topic</option>
                </select>
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {projects.filter(project => filterProjects([project], filters).length > 0).map(project => (
                            <div className="project" key={project.id}>
                                <h1 className="myProjects--container__components__title">{project.name}</h1>
                                <span className="myProjects--container__components__created">Skapades {project.created_at}</span>
                                <p className="myProjects--container__components__lang">{project.language}</p>
                                <Link to={`/project/${project.id}`} className="myProjects--container__components__btn">Beskrivning projektet</Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}