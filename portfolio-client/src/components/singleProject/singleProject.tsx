
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IRepo } from "../../model/IProject";
import { GetRepoById } from "../../controller/getProject";



export const Project = (() => {

    const [project, setProject] = useState<IRepo>();
    const { id } = useParams();


    useEffect(() => {
        getDataById();
    }, []);
    const getDataById = async () => {
        if (id) {
            let response = await GetRepoById(id!);
            setProject(response);
        }
    }
    return (<>
    </>
    );
})