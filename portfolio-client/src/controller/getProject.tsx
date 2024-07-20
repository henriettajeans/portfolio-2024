
import axios from "axios";
import { IProject, IRepo, ITempRepo } from "../model/IProject";


export const getProjects = async (): Promise<IProject[]> => {
    let response = await axios.get("https://api.github.com/users/henriettajeans/repos");
    return response.data;
}

export const GetRepoById = async (id: string): Promise<IRepo> => {
    let response = await axios.get<any>("https://api.github.com/users/henriettajeans/repos");
    console.log('getrepobyid', response, id);
    return response.data.filter((repo: ITempRepo) => String(repo.id) === id)[0];
};