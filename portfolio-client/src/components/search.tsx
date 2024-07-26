import { useEffect, useState } from "react";
import { getProjects } from "../controller/getProject";
import { IFilterObjects, IProject, IProjectProp } from "../model/IProject";

export const Search: React.FC<IProjectProp> = ({ filteredProjects }) => {

    return (
        <><div>
            {filteredProjects.map(items => (
                <div key={items.id}>
                    <h3>{items.name}</h3>
                    <p>{items.description}</p>
                    {/* Render other project details as needed */}
                </div>
            ))}
        </div>
        </>
    )
}