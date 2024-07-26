import { useEffect } from "react";
import { IFilterObjects, IProject } from "../model/IProject";


export const Search: React.FC<{ projects: IProject[], filters: IFilterObjects, setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>> }> = ({ projects, filters, setFilteredProjects }) => {

    const sortAndFilterProjects = (projects: IProject[], filters: IFilterObjects): IProject[] => {
        const filteredProjects = projects.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
            const matchesTopics = filters.topics.length === 0 || filters.topics.some(filterTopic =>
                item.topics.includes(filterTopic)
            );
            return matchesSearchTerm && matchesTopics;
        });
        const sortedProjects = filteredProjects.sort((a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (filters.sort === 'desc') {
                return nameB.localeCompare(nameA);
            } else if (filters.sort === 'asc') {
                return nameA.localeCompare(nameB);
            }

            return 0;
        });
        return sortedProjects;
    };
    useEffect(() => {
        const filteredAndSorted = sortAndFilterProjects(projects, filters);
        setFilteredProjects(filteredAndSorted);
    }, [projects, filters, setFilteredProjects]);

    return (
        <><input>
        </input>
            <button>Sök</button>
        </>
    )
}