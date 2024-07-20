import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/aboutme";
import { Home } from "./components/home";
import { Projects } from "./components/projectDisplays";
import { Project } from "./components/singleProject";
import { NotFound } from "./components/404";

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
            },
            {
                path: "*",
                element: <NotFound />
            }

        ]
    },

])