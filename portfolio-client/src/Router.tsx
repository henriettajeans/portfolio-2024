import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/about/aboutme";
import { Home } from "./components/home/home";
import { Projects } from "./components/projects/projectDisplays";
import { Project } from "./components/singleProject/singleProject";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/project/:id',
                element: <Project />
            }

        ]
    },

])