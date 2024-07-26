import { useEffect, useState } from "react";
import { IFilterObjects, IProject } from "../model/IProject";
import { Topics, TOPICS } from "../model/filterType";


export const Search: React.FC<{ projects: IProject[], filters: IFilterObjects, setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>> }> = ({ projects, filters, setFilteredProjects }) => {
    const [searchTerm, setSearchTerm] = useState(filters.searchTerm);
    const [selectedTopics, setSelectedTopics] = useState<Topics[]>(filters.topics);

    const filterProjects = (projects: IProject[], filters: IFilterObjects): IProject[] => {
        console.log('Filtering with:', { searchTerm, selectedTopics, filters });

        return projects.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTopics = selectedTopics.length === 0 || selectedTopics.some(filterTopic =>
                item.topics.includes(filterTopic)
            );

            return matchesSearchTerm && matchesTopics;
        });
    };

    useEffect(() => {
        const filtered = filterProjects(projects, { ...filters, searchTerm, topics: selectedTopics });
        setFilteredProjects(filtered);
    }, [projects, searchTerm, selectedTopics, filters]);

    const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleTopicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const options = event.target.options;
        const selectedValues: Topics[] = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                const value = options[i].value as Topics;
                if (TOPICS.includes(value)) {  // Ensure value is a valid Topics type
                    selectedValues.push(value);
                }
            }
        }
        setSelectedTopics(selectedValues);
    };
    // const options = TOPICS.map(topic => ({
    //     value: topic,
    //     label: topic
    // }));

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
                <label htmlFor="topics">Topics:</label>
                <select
                    id="topics"
                    multiple
                    value={selectedTopics}
                    onChange={handleTopicChange}
                    style={{ width: '200px', height: '150px' }} // Adjust styling as needed
                >
                    {TOPICS.map(topic => (
                        <option key={topic} value={topic}>{topic}</option>
                    ))}
                </select>
                <div>
                    <h2>Search Results:</h2>
                    <ul>
                        {projects.filter(project => filterProjects([project], filters).length > 0).map(project => (
                            <li key={project.id}>
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <p><strong>Language:</strong> {project.language}</p>
                                    <p><strong>Created At:</strong> {new Date(project.created_at).toLocaleDateString()}</p>
                                    <p><strong>Topics:</strong> {project.topics.join(', ')}</p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>

    )
}