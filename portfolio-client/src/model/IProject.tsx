import { Topics, GroupProject, HobbyProject, SortOption } from "./filterType";

export interface IProject {
    id: string;
    html_url: string;
    topics: [] | any;
    created_at: string;
    name: string;
    language: string

}

export interface IRepo {
    id: string;
    html_url?: string;
    topics?: [];
    created_at?: string;
    name?: string;
    language?: string;
    description?: string

}
export interface IProjectProp {
    project: IProject;
}

export interface IFilterObjects {
    searchTerm: string;
    topics: Topics[];
    groupProject: GroupProject[];
    hobbyProject: HobbyProject[];
    sort: SortOption


}