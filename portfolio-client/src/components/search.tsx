import { useEffect, useState } from "react";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject, IProjectProp, ISearchProps } from "../model/IProject";
import { Link } from "react-router-dom";

export const Search: React.FC<ISearchProps> = ({ projects, filters, setFilteredProjects }) => {

    const sortAndFilterProjects = () => {
        return projects.filter(item => {
            const matchesSearchTerm = item.name && item.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
            const matchesTopics = filters.topics.length === 0 || filters.topics.some(filterTopic =>
                item.topics.includes(filterTopic)
            );
            // Implement additional filter conditions for groupProject, hobbyProject, and sorting if needed
            return matchesSearchTerm && matchesTopics;
        });
    };
    useEffect(() => {
        const filtered = sortAndFilterProjects();
        setFilteredProjects(filtered);
    }, [projects, filters, setFilteredProjects]);


    return (
        <><input>
        </input>
            <button>Sök</button>
        </>
    )
}