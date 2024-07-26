import { useEffect, useState } from "react";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject } from "../model/IProject";

export const Search = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<IProject[]>([]);
    const [filters, setFilter] = useState<IFilterObjects>({
        searchTerm: '',
        topics: [],
        groupProject: [],
        hobbyProject: [],
        sort: "asc",
    })

    useEffect(() => {
        const getData = async () => {
            try {
                let items = await getProjects();
                setItems(items);
                setIsLoaded(true);
            } catch (error) {
                console.error("Error i search-komponenten med getData:", error);
            }
        };

        if (items.length === 0) {
            getData();
        }
    }, [items.length]);

    const sortAndFilterProjects = (filterObj: IFilterObjects) => {
        console.log(filterObj.searchTerm)
        return items.filter(item => {
            return (item.name && item.name.toLowerCase().indexOf(filterObj.searchTerm.toLowerCase()) > -1)

        })

    }
    return (
        <><div>
            <p>
                Sökfunktionen
            </p>
        </div>
        </>
    )
}