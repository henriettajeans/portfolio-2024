import { GroupProject, HobbyProject, SortOption, Topics } from "./filterType";

export interface IProject {
    id: string;
    html_url: string;
    topics: Topics[];
    created_at: string;
    name: string;
    language: string
    description: string

}

export interface IRepo {
    id: string;
    html_url?: string;
    topics?: Topics[];
    created_at?: string;
    name?: string;
    language?: string;
    description?: string

}
export interface IProjectProp {
    projects: IProject[];
}


export interface IFilterObjects {
    searchTerm: string;
    topics: Topics[];
    groupProject: GroupProject[];
    hobbyProject: HobbyProject[];
    sort: SortOption
}
export interface ISearchProps {
    projects: IProject[];
    filters: IFilterObjects;
    setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}