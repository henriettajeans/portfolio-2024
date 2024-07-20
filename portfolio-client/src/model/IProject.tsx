export interface IProject {
    id: string;
    html_url: string;
    topics: [];
    created_at: string;
    name: string;
    language: string

}

export interface IRepo {
    id: string;
    html_url: string;
    topics: [];
    created_at: string;
    name: string;
    language: string;
    description: string

}

export interface ITempRepo {
    id: string;
}